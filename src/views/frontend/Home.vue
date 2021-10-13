<template>
  <main>
    <!-- Banner -->
    <section class="container-fluid mb-5 banner__img banner__home" data-aos="zoom-in" data-aos-duration="1000">
      <div class="row ">
        <div class="container banner__title">
          <div class="row h-100 d-flex align-items-center">
            <div class="col">
              <h2 class="font-weight-bold h1 mb-3 text-white" data-aos="fade-down" data-aos-delay="300">炙燒食堂</h2>
              <h4 class="d-flex flex-column flex-md-row mb-3">
                <span class="d-flex align-items-center text-white" data-aos="fade-up" data-aos-delay="600">
                  <span class="material-icons ">arrow_right</span>美味的火烤
                </span>
                <span class="d-flex align-items-center text-white" data-aos="fade-up" data-aos-delay="900">
                  <span class="material-icons">arrow_right</span>均衡的營養
                </span>
                <span class="d-flex align-items-center text-white" data-aos="fade-up" data-aos-delay="1200">
                  <span class="material-icons">arrow_right</span>獻給總想大口吃肉的你
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-6"></div>
      </div>
    </section>
    <!-- 服務 -->
      <section class="promise">
      <div
        class="promise-top d-flex flex-column align-items-center justify-content-center"
      >
        <h4 class="text-white mb-3">我們的承諾</h4>
        <span class="text-white bg-secondary">用心對待每份產品</span>
      </div>
      <div class="promise-content py-4">
        <ul
          class="text-white d-flex flex-column flex-md-row align-items-center align-items-center justify-content-around pl-0"
        >
          <li class="d-flex flex-column align-items-center">
            <span
              class="promise-content-icon bg-primary d-flex align-items-center justify-content-center"
            >
              <img src="../../assets/image/bg-img/icon-1.svg" alt="icon" />
            </span>
            <h5 class="text-primary my-3 promise-content-title">保證新鮮</h5>
            <p class="text-dark text-center">
              每份餐點都是當日限量，配上專業的冷凍物流，讓您吃到當日最新鮮的食物，消費者吃得安心是對我們最大的鼓勵。
            </p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span
              class="promise-content-icon bg-primary d-flex align-items-center justify-content-center"
            >
              <img src="../../assets/image/bg-img/icon-2.svg" alt="icon" />
            </span>
            <h5 class="text-primary my-3 promise-content-title">價格實惠</h5>
            <p class="text-dark text-center">
              誰說吃的好一定要花大錢?
              <br />
              我們每道料理以最實惠的價格進行販售，讓前來的客人們都能感受到滿滿的飽足感與幸福感。
            </p>
          </li>
          <li class="d-flex flex-column align-items-center">
            <span
              class="promise-content-icon bg-primary d-flex align-items-center justify-content-center"
            >
              <img src="../../assets/image/bg-img/icon-3.svg" alt="icon" />
            </span>
            <h5 class="text-primary my-3 promise-content-title">營養滿分</h5>
            <p class="text-dark">
              除了由肉類提供滿滿蛋白質，我們每道料理都會精心挑選蔬菜以提供維生素、纖維保持人體每餐所需的營養，讓你吃的好同時也吃得健康。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- 五星評價 -->
    <section class="container mb-5">
      <div class="row">
        <div class="col pt-5">
          <h2 id="repair" class="d-flex justify-content-center align-items-center font-weight-bold">
            這邊也歡迎內用！
            <span class="material-icons text-primary d-none d-md-block mx-2 h2 mb-0">
                local_dining
            </span>
          </h2>
          <div class="d-flex justify-content-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2801395154693!2d121.20685311317945!3d24.95658174754853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823d943e254b3%3A0x420ccb6d1843a4fb!2z54KZ6auY54Sh5LiK54Kt54Gr54eS6IKJLeS4reWjouW6lw!5e0!3m2!1szh-TW!2stw!4v1633955586906!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
        <section>
      <h2 class="text-center">聯絡我們</h2>
      <div
        class="email-section d-flex flex-column justify-content-center align-items-center"
      >
        <div class="email-content">
          <div class="email-title mb-3 text-primary">
            訂閱我們
            <br class="mb-3" />
            獲得最新消息及優惠
          </div>
          <div class="email-input input-group d-flex">
            <input type="text" />
            <button class="text-white bg-primary">訂閱</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
