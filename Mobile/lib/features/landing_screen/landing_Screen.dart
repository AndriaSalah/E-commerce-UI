import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/screens/home_screen.dart';
import 'package:flutter/material.dart';

class LandingScreen extends StatefulWidget {
  const LandingScreen({super.key});

  @override
  State<LandingScreen> createState() => _LandingScreenState();
}

class _LandingScreenState extends State<LandingScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: const HomeScreen(),
      bottomNavigationBar: BottomNavigationBar(
        unselectedItemColor: AppColors.darkGrey,
        selectedItemColor: AppColors.primary,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        items: const [
          BottomNavigationBarItem(icon: Icon(AppIcons.home), label: ""),
          BottomNavigationBarItem(icon: Icon(AppIcons.search), label: ""),
          BottomNavigationBarItem(icon: Icon(AppIcons.heart), label: ""),
          BottomNavigationBarItem(icon: Icon(AppIcons.shopping_bag), label: ""),
          BottomNavigationBarItem(icon: Icon(AppIcons.user), label: ""),
        ],
      ),
    );
  }
}
