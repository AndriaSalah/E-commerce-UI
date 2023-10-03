import 'package:ecom/core/utils/utils.dart';
import 'package:ecom/features/home/data/product_model.dart';
import 'package:flutter/material.dart';
import 'package:readmore/readmore.dart';

import 'expanded_widget.dart';

class ViewProductInformation extends StatelessWidget {
  const ViewProductInformation({
    super.key,
    required this.product,
  });
  final ProductModel product;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Column(
        children: [
          ExpandedWidget(
            title: "Product Details",
            children: [
              Text(
                "Reflective design details \nFabric: Body: 100% recycled polyester.Lining: 79% polyester/\n21% elastane. \nHand wash \nImported \nNot intended for use as Personal Protective Equipment \nColour Shown: Volt \nStyle: BV2204-702 \nCountry/Region of Origin: Indonesia",
                style: AppTypography.regular14(),
              ),
            ],
          ),
          const ExpandedWidget(
            title: "Specification",
            children: [
              Row(
                children: [
                  Expanded(
                    child: SpecificationData(
                      titleList: [
                        'Sleeve Length',
                        'Print or Pattern Type',
                        'Length',
                        'Lining Fabric',
                        'Hemline',
                      ],
                      contentList: [
                        'Long Sleeves',
                        'Washed',
                        'Regular',
                        'Unlined',
                        'Straight',
                      ],
                    ),
                  ),
                  Space(width: 50),
                  Expanded(
                    child: SpecificationData(
                      titleList: [
                        'Type',
                        'Color',
                        'Closure',
                        'Number of Pockets',
                        'Occasion',
                      ],
                      contentList: [
                        'Denim Jacket',
                        'Spread color',
                        'Button',
                        '4',
                        'Casual',
                      ],
                    ),
                  ),
                ],
              ),
            ],
          ),
          ExpandedWidget(
            title: "Ratings & Reviews",
            children: [
              Row(
                children: [
                  Text(
                    "4.4",
                    style: AppTypography.medium28(),
                  ),
                  const Space(width: 15),
                  const Stars(rate: 4),
                ],
              ),
              Container(
                margin: const EdgeInsets.only(top: 10, bottom: 15),
                child: Text(
                  '35 Verified Buyers',
                  style: AppTypography.regular14(),
                ),
              ),
              Text(
                'Runs small',
                style: AppTypography.regular20(),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Stars(
                      rate: 2, starsSize: 17, starsColor: Colors.yellow),
                  Text(
                    '2.3',
                    style: AppTypography.regular14(),
                  ),
                  Text(
                    'Anna Doe',
                    style: AppTypography.regular14(color: AppColors.darkGrey),
                  ),
                  Text(
                    '20 September 2021',
                    style: AppTypography.regular14(color: AppColors.darkGrey),
                  ),
                ],
              ),
              ReadMoreText(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum feugiat convallis tristique. Ut libero amet massa porttitor elit adipiscing.',
                trimLines: 2,
                style: AppTypography.regular14(),
                trimMode: TrimMode.Line,
                trimCollapsedText: 'Read more',
                trimExpandedText: 'Read less',
                moreStyle: AppTypography.regular14(color: AppColors.primary),
                lessStyle: AppTypography.regular14(color: AppColors.primary),
              ),
              const Space(height: 10),
              ReviewedImages(
                product: product,
                itemCount: 3,
              ),
              const Space(height: 15),
              Text(
                'Runs small',
                style: AppTypography.regular20(),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Stars(
                      rate: 2, starsSize: 17, starsColor: Colors.yellow),
                  Text(
                    '2.3',
                    style: AppTypography.regular14(),
                  ),
                  Text(
                    'Anna Doe',
                    style: AppTypography.regular14(color: AppColors.darkGrey),
                  ),
                  Text(
                    '20 September 2021',
                    style: AppTypography.regular14(color: AppColors.darkGrey),
                  ),
                ],
              ),
              ReadMoreText(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum feugiat convallis tristique. Ut libero amet massa porttitor elit adipiscing.',
                trimLines: 2,
                style: AppTypography.regular14(),
                trimMode: TrimMode.Line,
                trimCollapsedText: 'Read more',
                trimExpandedText: 'Read less',
                moreStyle: AppTypography.regular14(color: AppColors.primary),
                lessStyle: AppTypography.regular14(color: AppColors.primary),
              ),
              const Space(height: 10),
              ReviewedImages(
                product: product,
                itemCount: 2,
              ),
            ],
          ),
          ExpandedWidget(
            title: "How this was made",
            children: [
              Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu ",
                style: AppTypography.regular14(),
              )
            ],
          ),
          ExpandedWidget(
            title: "Manufacturing Information",
            children: [
              Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu accumsan sollicitudin aliquet nunc.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus tristique in tellus diam, metus sit. Quis venenatis, neque arcu ",
                style: AppTypography.regular14(),
              )
            ],
          ),
        ],
      ),
    );
  }
}

class ReviewedImages extends StatelessWidget {
  const ReviewedImages({
    super.key,
    required this.product,
    required this.itemCount,
  });

  final ProductModel product;
  final int itemCount;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: AppSizes.height! * 0.12,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemBuilder: (context, index) => Container(
          width: AppSizes.width! * 0.25,
          clipBehavior: Clip.antiAlias,
          decoration: ShapeDecoration(
            image: DecorationImage(
              image: AssetImage(product.images[index]),
              fit: BoxFit.cover,
            ),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10),
            ),
          ),
          child: index == itemCount - 1
              ? Container(
                  color: AppColors.black.withOpacity(0.4),
                  alignment: Alignment.center,
                  child: Text(
                    "+ ${product.images.length}",
                    style: AppTypography.regular28(color: AppColors.background),
                  ),
                )
              : null,
        ),
        separatorBuilder: (context, index) => const Space(width: 10),
        itemCount: itemCount,
      ),
    );
  }
}

class Stars extends StatelessWidget {
  const Stars({
    super.key,
    this.height,
    required this.rate,
    this.starsColor,
    this.starsSize,
  });
  final double? height;
  final double rate;
  final Color? starsColor;
  final double? starsSize;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height ?? AppSizes.height! * 0.034,
      child: ListView.separated(
        shrinkWrap: true,
        scrollDirection: Axis.horizontal,
        physics: const NeverScrollableScrollPhysics(),
        itemBuilder: (context, index) => index < rate
            ? Icon(AppIcons.star_solid, color: starsColor, size: starsSize)
            : Icon(AppIcons.star, size: starsSize),
        separatorBuilder: (context, index) => const Space(width: 5),
        itemCount: 5,
      ),
    );
  }
}

class SpecificationData extends StatelessWidget {
  const SpecificationData({
    super.key,
    required this.titleList,
    required this.contentList,
  });
  final List<String> titleList;
  final List<String> contentList;
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          titleList[0],
          style: AppTypography.regular14(color: AppColors.darkGrey),
        ),
        Text(
          contentList[0],
          style: AppTypography.regular14(),
        ),
        const Divider(thickness: 1),
        Text(
          titleList[1],
          style: AppTypography.regular14(color: AppColors.darkGrey),
        ),
        Text(
          contentList[1],
          style: AppTypography.regular14(),
        ),
        const Divider(thickness: 1),
        Text(
          titleList[2],
          style: AppTypography.regular14(color: AppColors.darkGrey),
        ),
        Text(
          contentList[2],
          style: AppTypography.regular14(),
        ),
        const Divider(thickness: 1),
        Text(
          titleList[3],
          style: AppTypography.regular14(color: AppColors.darkGrey),
        ),
        Text(
          contentList[3],
          style: AppTypography.regular14(),
        ),
        const Divider(thickness: 1),
        Text(
          titleList[4],
          style: AppTypography.regular14(color: AppColors.darkGrey),
        ),
        Text(
          contentList[4],
          style: AppTypography.regular14(),
        ),
        const Divider(thickness: 1),
      ],
    );
  }
}
