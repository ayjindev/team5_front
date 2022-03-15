<template>
  <div id="app">
    <div class="rating">
      <p>김이름님 볼보는 어떠셨나요?</p>
      <div class="star-rating">
        <input id="5-stars" v-model="ratings" type="radio" name="rating" value="5" />
        <label for="5-stars" class="star">&#9733;</label>
        <input id="4-stars" v-model="ratings" type="radio" name="rating" value="4" />
        <label for="4-stars" class="star">&#9733;</label>
        <input id="3-stars" v-model="ratings" type="radio" name="rating" value="3" />
        <label for="3-stars" class="star">&#9733;</label>
        <input id="2-stars" v-model="ratings" type="radio" name="rating" value="2" />
        <label for="2-stars" class="star">&#9733;</label>
        <input id="1-star" v-model="ratings" type="radio" name="rating" value="1" />
        <label for="1-star" class="star">&#9733;</label>
      </div>
      <p>별점을 남겨주세요!</p>
    </div>
    <div class="review">
      <div class="main-container">
        <div class="room-deal-information-container">
          <div class="room-file-upload-wrapper">
            <div v-if="!files.length" class="room-file-upload-example-container">
              <div class="room-file-upload-example">
                <div class="room-file-notice-item room-file-upload-button">
                  <div class="image-box">
                    <!-- <div class="image-profile">
            <img :src="profileImage" />
            </div>-->
                    <label for="file">사진 등록</label>
                    <input id="file" ref="files" type="file" multiple @change="imageUpload" />
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="file-preview-content-container">
              <div class="file-preview-container">
                <div v-for="(file, index) in files" :key="index" class="file-preview-wrapper">
                  <div class="file-close-button" :name="file.number" @click="fileDeleteButton">x</div>
                  <img :src="file.preview" />
                </div>
                <div class="file-preview-wrapper-upload">
                  <div class="image-box">
                    <label for="file">추가 사진 등록</label>
                    <input id="file" ref="files" type="file" multiple @change="imageAddUpload" />
                  </div>
                  <!-- <div class="file-close-button" :name="file.number" @click="fileDeleteButton">x</div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text">
        <label for="text"><textarea placeholder="솔직한 후기 부탁드려요." /></label>
      </div>
    </div>
    <div class="send">
      <button @click="goToReviewBoard">후기 등록하기</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ratings: 0,
      files: [], //업로드용 파일
      filesPreview: [],
      uploadImageIndex: 0 // 이미지 업로드를 위한 변수
    }
  },
  methods: {
    // 후기등록 버튼 누르면 링크 이동
    goToReviewBoard() {
      return this.$router.replace('/review-board')
    },

    imageUpload() {
      // console.log(this.$refs.files.files)

      // this.files = [...this.files, this.$refs.files.files];
      //하나의 배열로 넣기
      let num = -1
      for (let i = 0; i < this.$refs.files.files.length; i++) {
        this.files = [
          ...this.files,
          //이미지 업로드
          {
            //실제 파일
            file: this.$refs.files.files[i],
            //이미지 프리뷰
            preview: URL.createObjectURL(this.$refs.files.files[i]),
            //삭제및 관리를 위한 number
            number: i
          }
        ]
        num = i
        //이미지 업로드용 프리뷰
        // this.filesPreview = [
        //   ...this.filesPreview,
        //   { file: URL.createObjectURL(this.$refs.files.files[i]), number: i }
        // ];
      }
      this.uploadImageIndex = num + 1 //이미지 index의 마지막 값 + 1 저장
      // console.log(this.files)
      // console.log(this.filesPreview);
    },

    imageAddUpload() {
      // console.log(this.$refs.files.files)

      // this.files = [...this.files, this.$refs.files.files];
      //하나의 배열로 넣기c
      let num = -1
      for (let i = 0; i < this.$refs.files.files.length; i++) {
        // console.log(this.uploadImageIndex)
        this.files = [
          ...this.files,
          //이미지 업로드
          {
            //실제 파일
            file: this.$refs.files.files[i],
            //이미지 프리뷰
            preview: URL.createObjectURL(this.$refs.files.files[i]),
            //삭제및 관리를 위한 number
            number: i + this.uploadImageIndex
          }
        ]
        num = i
      }
      this.uploadImageIndex = this.uploadImageIndex + num + 1

      // console.log(this.files)
      // console.log(this.filesPreview);
    },
    fileDeleteButton(e) {
      const name = e.target.getAttribute('name')
      this.files = this.files.filter(data => data.number !== Number(name))
      // console.log(this.files);
    }
  }
}
</script>

<style lang="scss" scoped>
.send {
  display: block;
  color: #fff;
  margin: auto;
  padding: 20px;
  background: $main;
  border: 1px solid $main;
  font-size: 2em;
  position: fixed;
  z-index: 80;
  bottom: 0;

  button {
    text-align: center;
    height: 100%;
    border: 0;
    background: 0;
    color: #fff;
  }
}

.rating {
  padding-top: 100px;
  .star-rating {
    display: flex;
    flex-direction: row-reverse;
    font-size: 2em;
    justify-content: space-around;
    padding: 0 0.2em;
    text-align: center;
    width: 5em;
    margin: 10px auto;
    label {
      color: #ccc;
      cursor: pointer;
    }
    input {
      display: none;
    }
  }

  .star-rating :checked ~ label {
    color: #ffe347;
  }
}

.room-deal-information-container {
  margin-top: 20px;
  color: #222222;
  border: 1px solid #dddddd;
}

.room-deal-information-content-wrapper {
  min-height: 50px;
  display: flex;
}

.room-deal-informtaion-content-title {
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  background-color: #f9f9f9;
}

.room-deal-information-content {
  width: 100%;
  font-size: 14px;
}

.room-deal-option-selector {
  display: flex;
  align-items: center;
  padding: 15px;
}

.room-deal-option-item {
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
}

.room-deal-option-item:last-child {
  margin-left: 10px;
}

.room-deal-option-notice {
  margin-left: auto;
  font-size: 14px;
  color: #888888;
}

.room-deal-option-item-deposit {
  margin-left: 10px;
}

.room-deal-information-wrapper {
  display: flex;
  flex-direction: column;
}

.room-deal-information-item-wrapper {
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 46px;
  width: 100%;
  > input {
    border: 1px solid #dddddd;
    width: 140px;
    height: 100%;
    padding: 0 15px;
    font-size: 15px;
  }
}

.room-deal-inforamtion-won {
  margin: 0 10px;
}

.room-deal-information-example {
  color: #888888;
}

.room-deal-inforamtion-divide {
  font-size: 22px;
  margin: 0 8px;
  color: #222222;
  font-weight: 100;
}

.room-deal-close-button-wrapper {
  margin-left: auto;
  cursor: pointer;
}

.room-deal-close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background-color: #666666;
  color: #dcdcdc;
}

.room-deal-cliked {
  background-color: #ebebeb;
  color: #aaaaaa;
}

.room-file-upload-example {
  height: 100%;
}

.file-preview-content-container {
  height: 100%;
}
.room-file-upload-wrapper {
  margin: 20px;
  border: 1px solid #dddddd;
  background-color: #f4f4f4;
  min-height: 150px;
  font-size: 15px;
  color: #888888;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.room-file-upload-example-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%;
  width: 100%; */
}

.image-box {
  margin-top: 30px;
  padding-bottom: 20px;
  text-align: center;
  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  label {
    display: inline-block;
    padding: 10px 20px;
    background-color: $sub;
    color: #fff;
    vertical-align: middle;
    font-size: 15px;
    cursor: pointer;
    border-radius: 5px;
  }
}

.file-preview-wrapper {
  padding: 10px;
  position: relative;
  > img {
    position: relative;
    width: 190px;
    height: 130px;
    z-index: 10;
  }
  .file-close-button {
    position: absolute;
    /* align-items: center; */
    line-height: 18px;
    z-index: 40;
    font-size: 18px;
    right: 5px;
    top: 10px;
    color: #fff;
    font-weight: bold;
    background-color: #666666;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
}

.file-preview-container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

@media all and(max-width:767px) {
  .text {
    textarea {
      width: 70%;
      min-width: 300px;
      border: 1px solid #dddddd;
      height: 100px;
      resize: none;
      padding: 5px;
      margin-bottom: 110px;
    }
  }
  .main-container {
    width: 70%;
    min-width: 300px;
    height: auto;
    margin: 0 auto;
  }
  .file-preview-wrapper {
    > img {
      width: 100%;
      height: auto;
    }
  }
  .file-preview-wrapper-upload {
    margin: 10px;
    padding-top: 16px;
    width: 100%;
    height: auto;
  }
  .send {
    width: 100%;
    button {
      width: 100%;
    }
  }
}
@media all and(min-width:768px) {
  .star-rating label:hover,
  .star-rating label:hover ~ label {
    color: $sub;
  }
  .text {
    textarea {
      width: 45%;
      min-width: 700px;
      border: 1px solid #dddddd;
      height: 100px;
      resize: none;
      padding: 5px;
      margin-bottom: 110px;
    }
  }
  .main-container {
    width: 45%;
    min-width: 700px;
    height: auto;
    margin: 0 auto;
  }
  .file-preview-wrapper-upload {
    margin: 10px;
    padding-top: 16px;
    width: 190px;
    height: 130px;
  }
  .send:hover {
    background: $sub;
  }
  .send {
    width: 45%;
    min-width: 700px;
    margin-left: 50%;
    left: -350px;
    button {
      width: 45%;
      min-width: 700px;
    }
  }
}
</style>
