<template name="skeleton">
  <view class="sk-container">
    <view class="page page data-v-83a5a03c data-v-83a5a03c">
      <view
        is="pages/index/components/CustomNavBar"
        class="nav nav data-v-83a5a03c data-v-83a5a03c"
      >
        <view
          class="navbar CustomNavBar--navbar data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0"
          style="padding-top: 44px"
        >
          <view
            class="logo CustomNavBar--logo data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0"
          >
            <image
              class="logo-image CustomNavBar--logo-image data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-image"
            ></image>
            <text
              class="logo-text CustomNavBar--logo-text data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-transparent sk-text-14-2857-292 sk-text"
              >新鲜 · 亲民 · 快捷</text
            >
          </view>
          <view
            class="search CustomNavBar--search data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0"
          >
            <text
              class="icon-search CustomNavBar--icon-search data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-transparent sk-text-14-2857-586 sk-text sk-pseudo sk-pseudo-circle"
              >搜索商品</text
            >
            <text
              class="icon-scan CustomNavBar--icon-scan data-v-d6ebbcc0 CustomNavBar--data-v-d6ebbcc0 sk-pseudo sk-pseudo-circle"
            ></text>
          </view>
        </view>
      </view>
      <view
        class="scroll scroll data-v-83a5a03c data-v-83a5a03c"
        style="margin-top: 136px"
      >
        <view is="components/XtxSwiper" class="data-v-83a5a03c data-v-83a5a03c">
          <view
            class="container XtxSwiper--container data-v-17cc3903 XtxSwiper--data-v-17cc3903"
          >
            <swiper
              :autoplay="false"
              :circular="true"
              class="swiper XtxSwiper--swiper data-v-17cc3903 XtxSwiper--data-v-17cc3903"
              :current="0"
            ></swiper>
            <view
              class="indicator XtxSwiper--indicator data-v-17cc3903 XtxSwiper--data-v-17cc3903"
            >
              <view
                class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
              ></view>
              <view
                class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
              ></view>
              <view
                class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
              ></view>
              <view
                class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903"
              ></view>
              <view
                class="dot XtxSwiper--dot data-v-17cc3903 XtxSwiper--data-v-17cc3903 active XtxSwiper--active"
              ></view>
            </view>
          </view>
        </view>
        <view
          is="pages/index/components/CategoryPanel"
          class="data-v-83a5a03c data-v-83a5a03c"
        >
          <view
            class="category CategoryPanel--category data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
          >
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-715 sk-text"
                >居家</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-298 sk-text"
                >锦鲤</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-278 sk-text"
                >服饰</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-261 sk-text"
                >母婴</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-593 sk-text"
                >个护</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-543 sk-text"
                >严选</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-430 sk-text"
                >数码</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-706 sk-text"
                >运动</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-22 sk-text"
                >杂项</text
              >
            </view>
            <view
              class="category-item CategoryPanel--category-item data-v-44ae5a81 CategoryPanel--data-v-44ae5a81"
            >
              <image
                class="icon CategoryPanel--icon data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-image"
              ></image>
              <text
                class="text CategoryPanel--text data-v-44ae5a81 CategoryPanel--data-v-44ae5a81 sk-transparent sk-text-14-2857-304 sk-text"
                >品牌</text
              >
            </view>
          </view>
        </view>
        <view
          is="pages/index/components/HotPanel"
          class="data-v-83a5a03c data-v-83a5a03c"
        >
          <view
            class="hot-panel HotPanel--hot-panel data-v-df6c854a HotPanel--data-v-df6c854a"
          >
            <view
              class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
            >
              <view
                class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <text
                  class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-73 sk-text"
                  >特惠推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-902 sk-text"
                  >精选全攻略</text
                >
              </view>
              <view
                class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
              </view>
            </view>
            <view
              class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
            >
              <view
                class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <text
                  class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-861 sk-text"
                  >爆款推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-821 sk-text"
                  >最受欢迎</text
                >
              </view>
              <view
                class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
              </view>
            </view>
            <view
              class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
            >
              <view
                class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <text
                  class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-746 sk-text"
                  >一站买全</text
                >
                <text
                  class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-421 sk-text"
                  >精心优选</text
                >
              </view>
              <view
                class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
              </view>
            </view>
            <view
              class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a"
            >
              <view
                class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <text
                  class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-355 sk-text"
                  >新鲜好物</text
                >
                <text
                  class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-117 sk-text"
                  >生活加分项</text
                >
              </view>
              <view
                class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
              >
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
                <view class="data-v-df6c854a HotPanel--data-v-df6c854a">
                  <image
                    class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
                    mode="aspectFit"
                  ></image>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view
          is="components/XtxGuess"
          class="r r data-v-83a5a03c data-v-83a5a03c"
        >
          <view
            class="container XtxGuess--container data-v-e94a02da XtxGuess--data-v-e94a02da"
          >
            <view
              class="caption XtxGuess--caption data-v-e94a02da XtxGuess--data-v-e94a02da"
            >
              <image
                class="caption-icon XtxGuess--caption-icon data-v-e94a02da XtxGuess--data-v-e94a02da sk-image"
                mode="scaleToFill"
              ></image>
              <text
                class="title XtxGuess--title data-v-e94a02da XtxGuess--data-v-e94a02da sk-transparent sk-text-14-2857-644 sk-text"
                >猜你喜欢</text
              >
              <image
                class="caption-icon XtxGuess--caption-icon data-v-e94a02da XtxGuess--data-v-e94a02da sk-image"
                mode="scaleToFill"
              ></image>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-292 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-586 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-715 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-298 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-278 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-261 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-593 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-543 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-430 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-706 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-22 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-304 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-73 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42rpx;
  position: relative !important;
}
.sk-text-14-2857-902 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-861 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42rpx;
  position: relative !important;
}
.sk-text-14-2857-821 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-746 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42rpx;
  position: relative !important;
}
.sk-text-14-2857-421 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-355 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42rpx;
  position: relative !important;
}
.sk-text-14-2857-117 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-644 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
