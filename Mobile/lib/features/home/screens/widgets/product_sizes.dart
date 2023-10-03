import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class ProductSizes extends StatefulWidget {
  const ProductSizes({
    Key? key,
  }) : super(key: key);
  @override
  State<ProductSizes> createState() => _ProductSizesState();
}

class _ProductSizesState extends State<ProductSizes> {
  List<String> sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
  ];
  int? selectedSizeIndex;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: AppSizes.height! * 0.055,
      child: ListView.separated(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        scrollDirection: Axis.horizontal,
        itemCount: sizes.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () {
              bool isClicked = index == selectedSizeIndex;
              setState(() {
                selectedSizeIndex = isClicked ? null : index;
              });
            },
            child: Container(
                width: AppSizes.width! * 0.1,
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: index == selectedSizeIndex
                      ? Border.all(width: 1, color: AppColors.darkGrey)
                      : null,
                  borderRadius: BorderRadius.circular(
                      index == selectedSizeIndex ? 13 : 0),
                  boxShadow: const [
                    BoxShadow(
                      color: Color(0x0C000000),
                      blurRadius: 15,
                      offset: Offset(0, 0),
                      spreadRadius: 0,
                    )
                  ],
                ),
                alignment: Alignment.center,
                child: Text(
                  sizes[index],
                  style: AppTypography.regular12(),
                )),
          );
        },
        separatorBuilder: (BuildContext context, int index) =>
            const Space(width: 17),
      ),
    );
  }
}
