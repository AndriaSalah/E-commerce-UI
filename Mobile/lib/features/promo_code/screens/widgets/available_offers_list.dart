import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:mobkit_dashed_border/mobkit_dashed_border.dart';

class AvailableOffersList extends StatelessWidget {
  const AvailableOffersList({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: 4,
      scrollDirection: Axis.vertical,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) => SizedBox(
        height: AppSizes.height! * 0.18,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            index == 2
                ? const SizedBox.shrink()
                : Text(
                    "Recommended",
                    style: AppTypography.medium18(),
                  ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  decoration: const BoxDecoration(
                    border: DashedBorder.fromBorderSide(
                        dashLength: 5,
                        side: BorderSide(color: Colors.black, width: 2)),
                  ),
                  padding:
                      const EdgeInsets.symmetric(horizontal: 20, vertical: 9),
                  margin: const EdgeInsets.symmetric(vertical: 10),
                  child: const Center(
                    child: Text(
                      'NEWW200',
                    ),
                  ),
                ),
                TextButton(
                  child: Text("Apply",
                      style: AppTypography.medium14(
                          color: index == 2
                              ? AppColors.darkGrey
                              : AppColors.primary)),
                  onPressed: () {},
                ),
              ],
            ),
            Text(
              "Save Rs 200",
              style: AppTypography.regular14(),
            ),
            Text(
              "Rs. 200 off on minimum purchase of RS. 1999.",
              style: AppTypography.regular14(),
            ),
            Text(
              "Expires on: 31st December 2021 | 11:59 PM",
              style: AppTypography.regular14(),
            ),
            index == 2
                ? Text(
                    "Add items worth Rs 50 to apply this offer",
                    style: AppTypography.regular14(color: Colors.red),
                  )
                : const SizedBox.shrink(),
          ],
        ),
      ),
      separatorBuilder: (context, index) => const Divider(thickness: 2),
    );
  }
}
