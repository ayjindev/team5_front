<template>
  <div style="padding-top: 5%">
    <div>
      <b-row align-h="center">
        <b-col cols="5">
          <b-card title="회원가입">
            <b-form-group>
              <label for="userId">아이디</label>
              <b-form-input
                id="userId"
                v-model="userId"
                :state="userIdState"
                aria-describedby="아이디"
                required
                size="sm"
                trim
              ></b-form-input>

              <!-- 조건 미충족 시 -->
              <b-form-invalid-feedback id="input-live-feedback">
                아이디는 5-12글자 사이여야 합니다.
              </b-form-invalid-feedback>

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
                size="sm"
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
                size="sm"
                required
                trim
              ></b-form-input>

              <!-- 조건 미충족 시 -->
              <b-form-invalid-feedback id="input-live-feedback">
                비밀번호가 일치하지 않습니다.
              </b-form-invalid-feedback>

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
                size="sm"
                required
                trim
              ></b-form-input>

              <!-- 조건 미충족 시 -->
              <b-form-invalid-feedback id="input-live-feedback">
                최소 2글자 이상 입력해 주세요
              </b-form-invalid-feedback>

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
                size="sm"
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
                size="sm"
                :formatter="formatNumber"
                required
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <label for="userEmail">생년월일</label>
              <b-form-input
                id="userBirth"
                v-model="userBirth"
                aria-describedby="생년월일"
                type="date"
                size="sm"
                required
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group class="daummap">
              <b-row>
                <label for="userAddress">주소</label>
                <b-col>
                  <b-form-input id="userZip" v-model="zip" type="text" placeholder="우편번호" size="sm"></b-form-input>
                </b-col>
                <b-col> <b-button size="sm" @click="showApi">우편번호 찾기</b-button></b-col>
                <b-form-input id="userAddr1" v-model="addr1" type="text" placeholder="주소" size="sm"></b-form-input>
                <b-form-input
                  id="userAddr2"
                  v-model="addr2"
                  type="text"
                  placeholder="상세주소"
                  size="sm"
                ></b-form-input>
              </b-row>
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Daummap',
  data() {
    return {
      userId: '',
      userPw: '',
      userPwCheck: '',
      userName: '',
      userEmail: '',
      userPhoneNumber: '',
      userBirth: '',
      zip: '',
      addr1: '',
      addr2: ''
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
    formatNumber(e) {
      return String(e).substring(0, 13)
    },
    showApi() {
      new window.daum.Postcode({
        oncomplete: data => {
          // 팝업에서 검색결과 항목을 클릭했을 때 실행할 코드를 작성하는 부분

          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('') 값을 가지므로, 이를 참고하여 분기 한다.
          let fullRoadAddr = data.roadAddress // 도로명 주소 변수
          let extraRoadAddr = '' // 도로명 조합형 주소 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraRoadAddr += extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName
          }
          // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraRoadAddr !== '') {
            extraRoadAddr = ' (' + extraRoadAddr + ')'
          }
          // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
          if (fullRoadAddr !== '') {
            fullRoadAddr += extraRoadAddr
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          this.zip = data.zonecode // 5자리 새 우편번호 사용
          this.addr1 = fullRoadAddr
        }
      }).open()
    }
  }
}
</script>
