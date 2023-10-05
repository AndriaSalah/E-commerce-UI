import 'package:ecom/features/auth/screens/forgot_password_screen.dart';
import 'package:ecom/features/auth/screens/otp_screen.dart';
import 'package:ecom/features/auth/screens/reset_password_screen.dart';
import 'package:ecom/features/auth/screens/signIn_screen.dart';
import 'package:ecom/features/auth/screens/signUp_screen.dart';
import 'package:ecom/features/home/data/product_model.dart';
import 'package:ecom/features/home/screens/detail_screen.dart';
import 'package:ecom/features/home/screens/home_screen.dart';
import 'package:ecom/features/landing_screen/landing_Screen.dart';
import 'package:ecom/features/promo_code/screens/promp_code_screen.dart';
import 'package:flutter/material.dart';

class Screens {
  static const signUpScreen = "signUpScreen";
  static const signInScreen = "signInScreen";
  static const forgotPasswordScreen = "forgotPasswordScreen";
  static const otpScreen = "otpScreen";
  static const resetPasswordScreen = "resetPasswordScreen";
  static const homeScreen = "homeScreen";
  static const detailScreen = "detailScreen";
  static const landingScreen = "landingScreen";
  static const promoCodeScreen = "promoCodeScreen";
}

class Routes {
  static Route generate(RouteSettings settings) {
    switch (settings.name) {
      case Screens.signUpScreen:
        return MaterialPageRoute(
          builder: (context) => const SignUpScreen(),
        );
      case Screens.signInScreen:
        return MaterialPageRoute(
          builder: (context) => const SignInScreen(),
        );
      case Screens.forgotPasswordScreen:
        return MaterialPageRoute(
          builder: (context) => const ForgotPasswordScreen(),
        );
      case Screens.otpScreen:
        return MaterialPageRoute(
          builder: (context) => const OtpScreen(),
        );
      case Screens.resetPasswordScreen:
        return MaterialPageRoute(
          builder: (context) => const ResetPasswordScreen(),
        );
      case Screens.homeScreen:
        return MaterialPageRoute(
          builder: (context) => const HomeScreen(),
        );
      case Screens.detailScreen:
        if (settings.arguments != null) {
          ProductModel product = settings.arguments as ProductModel;
          return MaterialPageRoute(
            builder: (context) => DetailScreen(product: product),
          );
        } else {
          return _unHandleRoute();
        }
      case Screens.promoCodeScreen:
        return MaterialPageRoute(
          builder: (context) => const PromoCodeScreen(),
        );
      case Screens.landingScreen:
        return MaterialPageRoute(
          builder: (context) => const LandingScreen(),
        );
      default:
        return _unHandleRoute();
    }
  }

  static Route _unHandleRoute() {
    return MaterialPageRoute(
      builder: (context) => Scaffold(
        appBar: AppBar(
          title: const Text('Error'),
        ),
        body: const Center(
          child: Text('Route not found'),
        ),
      ),
    );
  }
}
