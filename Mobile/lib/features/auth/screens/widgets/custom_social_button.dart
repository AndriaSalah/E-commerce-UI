import 'package:ecom/core/common/animations/shake_animation.dart';
import 'package:flutter/material.dart';

class CustomSocialButton extends StatelessWidget {
  final String icon;
  CustomSocialButton({super.key, required this.icon});

  final _shakeKey = GlobalKey<ShakeWidgetState>();

  @override
  Widget build(BuildContext context) {
    return ShakeWidget(
      key: _shakeKey,
      shakeOffset: 2,
      shakeCount: 4,
      shakeDuration: const Duration(milliseconds: 500),
      child: GestureDetector(
          onTap: () {
            _shakeKey.currentState?.shake();
            ScaffoldMessenger.of(context)
                .showSnackBar(const SnackBar(content: Text("Not Available")));
          },
          child: Image.asset(icon)),
    );
  }
}
