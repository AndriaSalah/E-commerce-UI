import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/screens/widgets/detail_app_bar.dart';
import 'package:ecom/features/promo_code/screens/widgets/available_offers_list.dart';
import 'package:flutter/material.dart';

class PromoCodeScreen extends StatelessWidget {
  const PromoCodeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const DetailAppBar(title: 'Promo Code'),
      body: SingleChildScrollView(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(right: 70),
              child: TextField(
                onTapOutside: (event) =>
                    FocusManager.instance.primaryFocus?.unfocus(),
                decoration: InputDecoration(
                  labelText: 'Enter Promo Code',
                  contentPadding: EdgeInsets.zero,
                  suffixIconConstraints:
                      const BoxConstraints(maxHeight: 35, maxWidth: 60),
                  suffixIcon: TextButton(
                    child: Text("Apply",
                        style:
                            AppTypography.medium14(color: AppColors.darkGrey)),
                    onPressed: () {},
                  ),
                ),
              ),
            ),
            const Space(height: 30),
            Text(
              "Available offers",
              style: AppTypography.medium20(),
            ),
            const Space(height: 15),
            const AvailableOffersList(),
          ],
        ),
      ),
    );
  }
}
