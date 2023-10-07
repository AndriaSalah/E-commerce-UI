import 'package:ecom/core/utils/utils.dart';
import 'package:flutter/material.dart';

class ProductColors extends StatefulWidget {
  const ProductColors({
    Key? key,
    required this.onColorSelected,
  }) : super(key: key);
  final Function(String) onColorSelected;
  @override
  State<ProductColors> createState() => _ProductColorsState();
}

class _ProductColorsState extends State<ProductColors> {
  int? clickedIndex;

  Map<String, Color> colors = {
    "Orange": const Color(0xFFFFCFB4),
    "Cyan": const Color(0xFF95F8FF),
    "Purple": const Color(0xFFFDC7FF),
    "White": const Color(0xFFF5F5F5),
    "Yellow": const Color(0xFFFDFFC1),
  };

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: AppSizes.height! * 0.05,
      child: ListView.separated(
        shrinkWrap: true,
        physics: const NeverScrollableScrollPhysics(),
        scrollDirection: Axis.horizontal,
        itemCount: colors.length,
        itemBuilder: (context, index) {
          String colorKey = colors.keys.elementAt(index);
          Color colorValue = colors[colorKey]!;
          bool isClicked = index == clickedIndex;

          return GestureDetector(
            onTap: () {
              setState(() {
                clickedIndex = isClicked ? null : index;
                widget.onColorSelected(colorKey);
              });
            },
            child: Container(
              width: AppSizes.width! * 0.1,
              padding: const EdgeInsets.all(7),
              decoration: ShapeDecoration(
                color: Colors.white,
                shape: OvalBorder(
                  side: isClicked
                      ? const BorderSide(color: AppColors.darkGrey, width: 1)
                      : BorderSide.none,
                ),
                shadows: const [
                  BoxShadow(
                    color: Color(0x0C000000),
                    blurRadius: 15,
                    offset: Offset(0, 0),
                    spreadRadius: 0,
                  )
                ],
              ),
              child: Container(
                decoration: ShapeDecoration(
                  color: colorValue,
                  shape: const StadiumBorder(),
                ),
              ),
            ),
          );
        },
        separatorBuilder: (BuildContext context, int index) =>
            const Space(width: 17),
      ),
    );
  }
}
