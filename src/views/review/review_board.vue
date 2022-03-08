<template>
  <div>
    <div class="filter">
      <div class="sort">
        <ul>
          <li><a @click="priceLow">낮은 가격순 </a></li>
          /
          <li><a @click="priceHigh"> 높은 가격순</a></li>
        </ul>
        <div class="search_box">
          <input v-model="search" class="stage-search" type="text" placeholder="검색어를 입력해 주세요" />
        </div>
      </div>
    </div>
    <div class="review_list">
      <div v-for="review in reviews" :key="review.index" class="review_box">
        <div class="img_box">
          <img :src="review.img" :alt="review.name" />
        </div>
        <div class="text_box">
          <dl>
            <dd>{{ review.name }} : {{ review.car }}</dd>
            <dd id="star">&#9733; {{ review.star }}</dd>
            <dt>{{ review.title }}</dt>
            <dd>{{ review.contents }}</dd>
            <dd>▶</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      reviews: [
        {
          img: require('@/assets/images/car/벤츠.jpg'),
          car: '벤츠',
          title: '싸고 좋아요',
          contents: '차 내부가 쾌적하고...',
          name: '김나나',
          date: '',
          star: 5
        },
        {
          img: require('@/assets/images/car/벤츠.jpg'),
          car: '벤츠',
          title: '싸고 좋아요',
          contents: '차 내부가 쾌적하고...',
          name: '김나나',
          date: '',
          star: 5
        },
        {
          img: require('@/assets/images/car/벤츠.jpg'),
          car: '벤츠',
          title: '싸고 좋아요',
          contents: '차 내부가 쾌적하고...',
          name: '김나나',
          date: '',
          star: 5
        },
        {
          img: require('@/assets/images/car/벤츠.jpg'),
          car: '벤츠',
          title: '싸고 좋아요',
          contents: '차 내부가 쾌적하고...',
          name: '김나나',
          date: '',
          star: 5
        }
      ]
    }
  }
  // 게시물번호, 제목, 카테고리(차종), 작성자, 작성 날짜?
}
</script>
<style lang="scss" scoped>
.filter {
  padding-top: 58px;
  margin-bottom: 20px;
}
.review_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid #eeeeee;
  margin: auto;
  height: auto;
  .review_box {
    border: 1px solid #eeeeee;
    margin: auto;

    height: 291px;
    .img_box {
      width: 100%;
      height: 200px;
      overflow: hidden;
      img {
        width: auto;
        height: 100%;
      }
    }
    .text_box {
      dl {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        dd {
          width: 100%;
          text-align: left;
          font-size: 1em;
        }
        dd:first-child,
        dd:nth-child(2),
        dt {
          width: 50%;
          text-align: left;
        }
        dt {
          font-size: 1.2em;
          line-height: 1.6em;
          font-weight: bold;
        }
        #star {
          font-size: 2em;
          color: #ffe347;
          width: 50%;
          text-align: right;
        }
        dd:nth-of-type(3) {
          width: 90%;
        }
        dd:nth-of-type(4) {
          width: 10%;
        }
      }
    }
  }
}
@media all and(max-width:767px) {
  .review_list {
    width: 100%;
    min-width: 300px;
    .review_box {
      width: 70%;
    }
  }
  .sort {
    flex-direction: column;
    font-size: 0.8em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    ul {
      display: flex;
      width: 100%;
      font-size: 1.1em;
      line-height: 3em;
      li {
        a {
          padding: 0 10px;
        }
      }
    }
    .search_box {
      padding-top: 5px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .stage-search {
        width: 70%;
        font-size: 1em;
        line-height: 1.4em;
      }
    }
  }
}
@media all and(min-width:768px) {
  .review_list {
    width: 45%;
    min-width: 700px;
    .review_box {
      width: 33.33333%;
    }
  }
  .sort {
    width: 45%;
    min-width: 700px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-top: 20px;
    flex-direction: row;
    a {
      color: #5e5e5e;
      padding: 0 7px;
    }
    ul {
      display: flex;
      justify-content: flex-start;
      line-height: 40px;
      width: 30%;
      li {
        a:hover {
          cursor: pointer;
          color: $main;
        }
      }
    }
    .search_box {
      width: 45%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .stage-search {
        font-size: 1em;
        line-height: 1.4em;
        width: 70%;
        text-align: left;
      }
      #search:hover {
        background: $sub;
        color: #fff;
        border-left: 0;
        border: 1px solid $main;
      }
      #reset:hover {
        color: $main;
      }
    }
  }
}
</style>
