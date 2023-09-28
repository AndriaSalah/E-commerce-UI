import 'package:flutter/material.dart';
import 'package:get/get.dart';

class AuthController extends GetxController {
  //static AuthController get to => Get.find();
  bool isChecked = false;

  TextEditingController emailController = TextEditingController();

  checkBoxClicked() {
    isChecked;
  }

  @override
  void onClose() {
    //emailController.dispose();
    super.onClose();
  }
}
