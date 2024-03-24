

import sys
import os
import cv2
from PyQt5 import QtWidgets, QtGui, QtCore
from ultralytics import YOLO
images_folder="C:/Users/hilay/Downloads/CHVG-Dataset/CHVG-Dataset"
#yolo model file .pt
model_file="C:/Users/hilay/Downloads/survilance.pt"
current_dir = os.getcwd()
folders = ["images", "labels","wrong_predictions"]
for folder in folders:
    os.makedirs(folder, exist_ok=True)

class LabelAi(QtWidgets.QMainWindow):
    def __init__(self, path, model_path):
        super(LabelAi, self).__init__()
        self.initUI()
        self.images_path = path
        self.images = os.listdir(path)
        self.current_image_index = 0
        self.model = YOLO(model_path, task="detect")
        self.inference = False
        self.start = False
        self.result = None
    
    def initUI(self):
        self.setWindowTitle('LabelAi')
        self.setWindowFlags(self.windowFlags() & ~QtCore.Qt.WindowMaximizeButtonHint)
        self.setGeometry(100, 100, 1000, 1200)

        self.start_button = self.create_button('Previous', self.prev_image, 20, 20)
        self.next_button = self.create_button('Next', self.next_image, 140, 20)
        self.iterate_button = self.create_button('Run Inference', self.infer, 300, 20)
        self.label_yes = self.create_button('Correct', self.yes_clicked, 150, 730)
        self.label_no = self.create_button('Not Correct', self.cancel_labeling, 400, 730)
        
        self.image_label = self.create_label(20, 80, 640, 640)

        self.exit_button = self.create_button('Exit', self.close, 900, 20)

        self.show()
    
    def create_button(self, text, callback, x, y):
        button = QtWidgets.QPushButton(text, self)
        button.setGeometry(QtCore.QRect(x, y, 100, 40))
        button.clicked.connect(callback)
        self.style_button(button, '#4CAF50', '#FFFFFF')
        return button

    def create_label(self, x, y, width, height):
        label = QtWidgets.QLabel(self)
        label.setGeometry(QtCore.QRect(x, y, width, height))
        label.setScaledContents(True)
        label.setStyleSheet("background-color: #ECF0F1; border: 2px solid #3498DB; border-radius: 5px;")
        return label

    def style_button(self, button, background_color, text_color):
        button.setStyleSheet(
            f"background-color: {background_color}; color: {text_color}; border: none; border-radius: 5px; padding: 10px; font-size: 14px;")

    def cancel_labeling(self):
        self.result = None
        cv2.imwrite(os.path.join(current_dir, "wrong_predictions", os.path.basename(os.path.join(self.images_path, self.images[self.current_image_index]))), cv2.imread(os.path.join(self.images_path, self.images[self.current_image_index])))
    def yes_clicked(self):
        if self.result is not None:
            with open(os.path.join(current_dir, "labels", f"{self.images[self.current_image_index]}.txt"), 'w') as f:
                for label in self.get_annotations():
                    f.write(label)
            cv2.imwrite(os.path.join(current_dir, "images", os.path.basename(os.path.join(self.images_path, self.images[self.current_image_index]))), cv2.imread(os.path.join(self.images_path, self.images[self.current_image_index])))
            print("File labeled successfully")
        else:
            pass
    def infer(self):
        self.inference = True
        result = self.model(os.path.join(self.images_path, self.images[self.current_image_index]))
        self.display_image(result[0].plot())
        self.result = result

    def get_annotations(self):
        boxes = self.result[0].boxes.xywh
        clss = self.result[0].boxes.cls
        annotations = []
        for i, box in enumerate(boxes):
            x, y, width, height = box
            annotations.append(f"{int(clss[i])} {x} {y} {width} {height}\n")
        return annotations

    def display_image(self, image):
        if self.inference:
            frame = image
        else:
            frame = cv2.imread(os.path.join(self.images_path, image))
        self.inference = False    
        height, width, channel = frame.shape
        bytes_per_line = 3 * width
        q_image = QtGui.QImage(frame.data, width, height, bytes_per_line, QtGui.QImage.Format_RGB888)
        pixmap = QtGui.QPixmap.fromImage(q_image)
        self.image_label.setPixmap(pixmap)

    def next_image(self):
        self.current_image_index = (self.current_image_index + 1) % len(self.images)
        self.display_image(self.images[self.current_image_index])

    def prev_image(self):
        self.current_image_index = (self.current_image_index - 1) % len(self.images)
        self.display_image(self.images[self.current_image_index])    

    def closeEvent(self, event):
        sys.exit()

if __name__ == '__main__':
    app = QtWidgets.QApplication(sys.argv)
    window = LabelAi(images_folder,model_file) 
    window.show()
    sys.exit(app.exec_())
