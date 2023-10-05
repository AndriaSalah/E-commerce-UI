import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/screens/widgets/product_colors.dart';
import 'package:ecom/features/home/screens/widgets/product_sizes.dart';
import 'package:flutter/material.dart';

import '../../data/product_model.dart';
import 'best_offer_text.dart';

class ViewProductDetails extends StatefulWidget {
  const ViewProductDetails({
    super.key,
    required this.product,
  });
  final ProductModel product;

  @override
  State<ViewProductDetails> createState() => _ViewProductDetailsState();
}

class _ViewProductDetailsState extends State<ViewProductDetails> {
  String colorName = "";

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Space(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                widget.product.productName,
                style: AppTypography.medium20(),
              ),
              const Icon(AppIcons.paper_plane),
            ],
          ),
          Text(
            widget.product.brandName,
            style: AppTypography.regular18(),
          ),
          Row(
            children: [
              Text(
                "Rs. 999",
                style: AppTypography.regular14(
                  color: AppColors.darkGrey,
                ).copyWith(
                  decoration: TextDecoration.lineThrough,
                ),
              ),
              const Space(width: 17),
              Text(
                widget.product.price,
                style: AppTypography.medium20(),
              ),
              const Space(width: 10),
              Text(
                "(${widget.product.offer} Off)",
                style: AppTypography.regular14(color: Colors.green),
              ),
              Spacer(),
              const Icon(
                Icons.av_timer_rounded,
                color: Colors.red,
                size: 18,
              ),
              Text(
                "13 hours left",
                style: AppTypography.regular12(color: Colors.red),
              ),
            ],
          ),
          const Space(height: 15),
          Text(
            "Color",
            style: AppTypography.medium18(),
          ),
          Text(
            colorName,
            style: AppTypography.regular12(),
          ),
          const Space(height: 8),
          ProductColors(onColorSelected: (selectedColor) {
            setState(() {
              colorName = selectedColor;
            });
          }),
          const Space(height: 15),
          Text(
            "Select Size",
            style: AppTypography.medium18(),
          ),
          const Space(height: 8),
          const ProductSizes(),
          const Space(height: 15),
          Text(
            "Best Offers",
            style: AppTypography.medium18(),
          ),
          const Space(height: 15),
          const BestOffersText(text: "Special offer get 25% off"),
          const Space(height: 5),
          const BestOffersText(
              text: "Bank offer get 30% off on Axis Bank Credit card"),
          const Space(height: 5),
          const BestOffersText(text: "Special offer get 25% off"),
          Text(
            "Delivery Details",
            style: AppTypography.medium18(),
          ),
          GestureDetector(
            onTap: () {
              Navigator.pushNamed(context, Screens.promoCodeScreen);
            },
            child: Container(
              width: AppSizes.width! * 0.65,
              height: AppSizes.height! * 0.055,
              padding: const EdgeInsets.symmetric(horizontal: 15),
              margin: const EdgeInsets.only(top: 15, bottom: 30),
              decoration: ShapeDecoration(
                shape: RoundedRectangleBorder(
                  side: const BorderSide(width: 1, color: Colors.grey),
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Enter Pincode",
                    style: AppTypography.regular14(),
                  ),
                  Text(
                    "Check",
                    style: AppTypography.regular14(),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
