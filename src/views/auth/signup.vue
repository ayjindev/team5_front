<template>
  <div style="padding-top: 5%">
    <div>
      <b-row align-h="center">
        <b-col cols="3">
          <b-card title="회원가입">
            <b-form-group>
              <label for="userId">아이디</label>
              <b-form-input
                id="userId"
                v-model="userId"
                v-bind="validateId"
                :state="userIdState"
                aria-describedby="아이디"
                required
                size="sm"
                trim
              ></b-form-input>

              <!-- 조건 미충족 시 -->
              <b-form-invalid-feedback id="input-live-feedback">
                아이디는 영문 대소문자와 숫자 5-12자리로 입력해야 합니다
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
                비밀번호는 영문 대소문자, 숫자, 특수문자 8-20자리로 입력해야 합니다
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
                이름은 한글 2자리 이상 입력해야 합니다
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
                :state="userEmailState"
                trim
                @blur="checkDuplicate"
              ></b-form-input>

              <!-- 조건 미충족 시 -->
              <b-form-invalid-feedback id="input-live-feedback"> 이메일 형식이 다릅니다 </b-form-invalid-feedback>

              <!-- 조건 충족 시 -->
              <b-form-text id="input-live-help"></b-form-text>
            </b-form-group>

            <b-form-group>
              <label for="userPhoneNumber">전화번호</label>
              <b-form-input
                id="userPhoneNumber"
                v-model="userPhoneNumber"
                aria-describedby="전화번호"
                placeholder="숫자만 입력해 주세요"
                type="text"
                size="sm"
                :formatter="formatNumber"
                required
                trim
                @keyup="getPhoneMask(userPhoneNumber)"
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
              <b-row align-h="center">
                <label for="userAddress">주소</label>
                <b-col cols="5">
                  <b-form-input
                    id="userZip"
                    v-model="userZip"
                    type="text"
                    placeholder="우편번호"
                    size="sm"
                  ></b-form-input>
                </b-col>
                <b-col> <b-button size="sm" @click="showApi">우편번호 찾기</b-button></b-col>
                <b-form-input
                  id="userAddr1"
                  v-model="userAddr1"
                  type="text"
                  placeholder="주소"
                  size="sm"
                ></b-form-input>
                <b-form-input
                  id="userAddr2"
                  v-model="userAddr2"
                  type="text"
                  placeholder="상세주소"
                  size="sm"
                ></b-form-input>
              </b-row>
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
      <button type="submit" class="btn btn-primary">Sign in</button>
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
      userZip: '',
      userAddr1: '',
      userAddr2: ''
    }
  },
  computed: {
    userIdState() {
      return this.userId.length > 4 && this.userId.length < 13 && /^[a-zA-Z0-9]*$/.test(this.userId)
    },
    userPwState() {
      return (
        this.userPw.length > 7 &&
        this.userPw.length < 21 &&
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/.test(this.userPw)
      ) // 영문 대문자+소문자+특수문자 8-20자리
    },
    userPwCheckState() {
      return this.userPwCheck === this.userPw
    },
    userNameState() {
      return this.userName.length > 1 && /^[가-힣]*$/.test(this.userName) // 한글 2자리 이상
    },
    userEmailState() {
      return (
        this.userEmail.length > 5 &&
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/.test(this.userEmail)
      ) // 이메일 형식(영문대소문자/숫자+@+영문대소문자/숫자+.+영문대소문자 3자리)
    }
  },
  methods: {
    // 전화번호 글자수 제한
    formatNumber(e) {
      return String(e).substring(0, 13) // 최대 11자리 010-1234-5678
    },

    // 전화번호 숫자만 입력 시 파이프(-) 자동 입력
    getPhoneMask(val) {
      let res = this.getMask(val)
      this.userPhoneNumber = res

      // 서버 전송 값에는 '-'를 제외하고 숫자만 저장
      this.model.userPhoneNumber = this.userPhoneNumber.replace(/[^0-9]/g, '')
    },

    getMask(inputNumber) {
      if (!inputNumber) return inputNumber
      inputNumber = inputNumber.replace(/[^0-9]/g, '')

      let res = ''
      if (inputNumber.length < 3) {
        res = inputNumber
      } else {
        if (inputNumber.substr(0, 2) == '02') {
          if (inputNumber.length <= 5) {
            //02-123까지만 입력 되어도 - 삽입
            res = inputNumber.substr(0, 2) + '-' + inputNumber.substr(2, 3)
          } else if (inputNumber.length > 5 && inputNumber.length <= 9) {
            //02-123-4567
            res = inputNumber.substr(0, 2) + '-' + inputNumber.substr(2, 3) + '-' + inputNumber.substr(5)
          } else if (inputNumber.length > 9) {
            //02-1234-5678
            res = inputNumber.substr(0, 2) + '-' + inputNumber.substr(2, 4) + '-' + inputNumber.substr(6)
          }
        } else {
          // 010-1234-5678
          if (inputNumber.length < 8) {
            res = inputNumber
          } else if (inputNumber.length == 8) {
            res = inputNumber.substr(0, 4) + '-' + inputNumber.substr(4)
          } else if (inputNumber.length == 9) {
            res = inputNumber.substr(0, 3) + '-' + inputNumber.substr(3, 3) + '-' + inputNumber.substr(6)
          } else if (inputNumber.length == 10) {
            res = inputNumber.substr(0, 3) + '-' + inputNumber.substr(3, 3) + '-' + inputNumber.substr(6)
          } else if (inputNumber.length > 10) {
            res = inputNumber.substr(0, 3) + '-' + inputNumber.substr(3, 4) + '-' + inputNumber.substr(7)
          }
        }
      }
      return res
    },

    // 우편번호 찾기 다음 우편번호 서비스 api 연동
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
          this.userZip = data.zonecode // 5자리 새 우편번호 사용
          this.userAddr1 = fullRoadAddr
        }
      }).open()
    }
  }
}
</script>
