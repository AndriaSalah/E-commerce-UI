import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/data/product_model.dart';
import 'package:flutter/material.dart';

class ViewProductImages extends StatefulWidget {
  const ViewProductImages({
    Key? key,
    required this.product,
  }) : super(key: key);
  final ProductModel product;
  @override
  State<ViewProductImages> createState() => _ViewProductImagesState();
}

class _ViewProductImagesState extends State<ViewProductImages> {
  int currentPage = 0;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: AppSizes.height! * 0.57,
      child: Column(
        children: [
          Expanded(
            child: PageView.builder(
              itemCount: widget.product.images.length,
              onPageChanged: (index) {
                setState(() {
                  currentPage = index;
                });
              },
              itemBuilder: (context, index) {
                return Container(
                  decoration: BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage(widget.product.images[index]),
                        fit: BoxFit.cover),
                  ),
                );
              },
            ),
          ),
          const Space(height: 10),
          SizedBox(
            height: 5,
            child: ListView.separated(
              physics: const NeverScrollableScrollPhysics(),
              scrollDirection: Axis.horizontal,
              shrinkWrap: true,
              itemBuilder: (context, index) {
                return Container(
                  width: 5,
                  height: 5,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color:
                        index == currentPage ? AppColors.primary : Colors.grey,
                  ),
                );
              },
              separatorBuilder: (context, index) => const Space(width: 5),
              itemCount: widget.product.images.length,
            ),
          )
        ],
      ),
    );
  }
}
