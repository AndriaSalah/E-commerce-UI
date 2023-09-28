import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class AuthField extends StatelessWidget {
  final TextEditingController controller;
  final TextInputType? keyboardType;
  final String? Function(String?)? onChanged;
  final List<TextInputFormatter>? inputFormatters;
  final InputDecoration? decoration;
  const AuthField(
      {super.key,
      required this.controller,
      this.keyboardType,
      this.onChanged,
      this.inputFormatters,
      this.decoration});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      onChanged: onChanged,
      inputFormatters: inputFormatters,
      //onTapOutside: FocusScope.,
      decoration: decoration,
      keyboardType: keyboardType,
    );
  }
}
