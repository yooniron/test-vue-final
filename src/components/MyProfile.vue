<template>
  <div>
    <h1>Education</h1>
		<hr>
    <div class="my-3 pl-3 about-me" v-html="education"></div>
    <br />
		<h1 >Skill</h1>
		<hr>
		<div class="my-4 pl-3" v-for="skill of skills" v-bind:key="skill.name">
      <h3>{{skill.name}} </h3>
      <li class="my-1 grey--text text--darken-2 ml-4" v-for="(description) of skill.description" :key="description">
		 {{description}}
      </li>

    </div>
 	<br />

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      education: `<p>
               			<p>2017. 03 ~ 2022 .02</p> <br>
               			<p>&nbsp;&nbsp; Software Engineering</p> <br>
               			<p>&nbsp;&nbsp; Seoil University(서일대학교)<p>
               		</p>`
			,
	  	skills:[
		  {
			  name: "Java",
			  description: [ "Springframework를 활용하여 어노테이션 기반 MVC 프레임워크 구조에 따른 로그인, 로그아웃 기능이 있는 게시판 프로그램 구현 가능 "]
		  },
		   {
			  name: "Frontend",
			  description: [ "플러그인, 이벤트가 동작하는 반응형 웹 사이트 작성 가능 (node.js, jQuery, Vue 활용 가능)"]
		  },
		   {
			  name: "JSP, PHP",
			  description: [ "웹 페이지와 서버, 데이터베이스 연결 가능, 게시판 구현 가능"]
		  },
		   {
			  name: "Android",
			  description: [ "필요한 기능을 API 문서나 라이브러리를 참조하여 구현할 수 있음.","MVC, MVVM 패턴 등의 대한 이해"]
		  },
		  {
			  name: "RDBMS",
			  description: [ "기본적인 CRUD SQL과 간단한 테이블 수준의 모델링"]
		  },
		  {
			  name: "OA",
			  description: [ "워 드(한글, Word) :전반적인 기능 사용에 자유롭고, 다양한 서식 파일 작성 가능","스프레드시트(Excel): 전반적인 기능 사용, 함수 및 도표 작성 가능, 자동 계산식이 적용되는 sheet 작성 가능",
												"프리젠테이션(PowerPoint): 전반적인 기능 사용 가능 다양한 서식에 따라 문서 연결 및 작성 가능"]
		  },
			{
				name: "그 외",
				description: [ "Adobe Photoshop, After effects, Vegas Pro", "기본적인 컴퓨터 조립, 분해 가능"]
			}
	  ]
    };
  }
};
</script>
