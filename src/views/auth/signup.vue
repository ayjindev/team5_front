<template>
  <div>
    <div>
      <b-form-group>
        <label for="userId">아이디</label>
        <b-form-input
          id="userId"
          v-model="userId"
          :state="userIdState"
          aria-describedby="아이디"
          required
          trim
        ></b-form-input>

        <!-- 조건 미충족 시 -->
        <b-form-invalid-feedback id="input-live-feedback"> 아이디는 5-12글자 사이여야 합니다. </b-form-invalid-feedback>

        <!-- 조건 충족 시 -->
        <b-form-text id="input-live-help"></b-form-text>
      </b-form-group>

      <b-form-group>
        <label for="userPw">비밀번호</label>
        <b-form-input
          id="userPw"
          v-model="userPw"
          :state="userPwState"
          aria-describedby="비밀번호"
          type="password"
          required
          trim
        ></b-form-input>

        <!-- 조건 미충족 시 -->
        <b-form-invalid-feedback id="input-live-feedback">
          비밀번호는 8-20글자 사이여야 합니다.
        </b-form-invalid-feedback>

        <!-- 조건 충족 시 -->
        <b-form-text id="input-live-help"></b-form-text>
      </b-form-group>

      <b-form-group>
        <label for="userPw">비밀번호 재확인</label>
        <b-form-input
          id="userPwCheck"
          v-model="userPwCheck"
          :state="userPwCheckState"
          aria-describedby="비밀번호 재확인"
          type="password"
          required
          trim
        ></b-form-input>

        <!-- 조건 미충족 시 -->
        <b-form-invalid-feedback id="input-live-feedback"> 비밀번호가 일치하지 않습니다. </b-form-invalid-feedback>

        <!-- 조건 충족 시 -->
        <b-form-text id="input-live-help"></b-form-text>
      </b-form-group>

      <b-form-group>
        <label for="userName">이름</label>
        <b-form-input
          id="userName"
          v-model="userName"
          :state="userNameState"
          aria-describedby="이름"
          required
          trim
        ></b-form-input>

        <!-- 조건 미충족 시 -->
        <b-form-invalid-feedback id="input-live-feedback"> 최소 2글자 이상 입력해 주세요 </b-form-invalid-feedback>

        <!-- 조건 충족 시 -->
        <b-form-text id="input-live-help"></b-form-text>
      </b-form-group>

      <b-form-group>
        <label for="userEmail">이메일</label>
        <b-form-input
          id="userEmail"
          v-model="userEmail"
          aria-describedby="이메일"
          type="email"
          placeholder="example@example.com"
          required
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <label for="userPhoneNumber">전화번호</label>
        <b-form-input
          id="userPhoneNumber"
          v-model="userPhoneNumber"
          aria-describedby="전화번호"
          placeholder="000-0000-0000"
          type="text"
          required
          trim
        ></b-form-input>
      </b-form-group>

      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>생년월일</label>
            <b-form-input
              id="userYY"
              v-model="userYY"
              aria-describedby="태어난 연도"
              placeholder="년(4글자)"
              type="text"
              :formatter="formatYear"
              trim
            >
              <label for="userYY">년</label>
            </b-form-input>
          </div>

          <div class="form-group col-md-4">
            <b-form-select v-model="userMM" :options="MMoptions"></b-form-select>
            <label for="userMM">월</label>
          </div>

          <div class="form-group col-md-2">
            <b-form-input
              id="userDD"
              v-model="userDD"
              aria-describedby="태어난 일자"
              placeholder="일"
              type="text"
              :formatter="formatDay"
              trim
            >
              <label for="userDD">일</label></b-form-input
            >
          </div>
        </div>
      </form>

      <b-form-group>
        <label for="userAddress">주소</label>
        <b-form-input id="userAddress" v-model="userAddress" aria-describedby="주소" type="text" trim></b-form-input>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPw: '',
      userPwCheck: '',
      userName: '',
      userEmail: '',
      userPhoneNumber: '',
      userYY: '',
      userMM: '',
      MMoptions: [
        // { value: null, text: '월', disabled: true },
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '8', text: '8' },
        { value: '9', text: '9' },
        { value: '10', text: '10' },
        { value: '11', text: '11' },
        { value: '12', text: '12' }
      ],
      userDD: '',
      userAddress: ''
    }
  },
  computed: {
    userIdState() {
      return this.userId.length > 4 && this.userId.length < 13
    },
    userPwState() {
      return this.userPw.length > 7 && this.userPw.length < 21
    },
    userPwCheckState() {
      return this.userPwCheck === this.userPw
    },
    userNameState() {
      return this.userName.length > 1 ? true : false
    }
  },
  methods: {
    formatYear(e) {
      return String(e).substring(0, 4)
    },
    formatDay(e) {
      return String(e).substring(0, 2)
    }
  }
}
</script>
