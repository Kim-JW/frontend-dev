package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller("apiTestController")
@RequestMapping("/test")
public class ApiTestController {
	
	@RequestMapping("/text")
	public String text() {
		return "text";
	}
	 
	@RequestMapping("/html")
	public String html() {
		return "<h1>AJAX 연습 </h1><p>HTML 데이터</p>";
	}
	
//	@ResponseBody
//	@RequestMapping(value = "/json", method=RequestMethod.GET)
//	public Object json() {
//		
//		GuestbookVo vo = new GuestbookVo();
//		vo.setNo(1L);
//		vo.setName("둘리");
//		vo.setMessage("호이~");
//		
//		return vo;
//	}
	
	@RequestMapping("/xml")
	public String xml() {
		return "xml";
	}
	
	@RequestMapping("/json01")
	public String json1() {
		return "json01";
	}
	
	@RequestMapping("/json02")
	public String json2() {
		return "json02";
	}
	
	@RequestMapping("/post01")
	public String post01() {
		return "post01";
	}
	
	@RequestMapping("/json03")
	public String json03() {
		return "json03";
	}
	
	@RequestMapping("/json04")
	public String json04() {
		return "json04";
	}
}
