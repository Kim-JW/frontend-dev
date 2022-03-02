package com.poscoict.ch08.controller.api;

import org.springframework.jdbc.support.xml.XmlResultProvider;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.dto.XmlResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {
	
	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		return "Text 데이터";
	}
	
	
	@ResponseBody
	@RequestMapping("")
	public Object xml() {
		XmlResult.GuestBookVo vo = new XmlResult.GuestBookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value = "/json", method = RequestMethod.GET)
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return JsonResult.success(vo);
		// return JsonResult.fail("Exception ...");
	}
	
	@ResponseBody
	@RequestMapping(value = "/post01", method = RequestMethod.POST)
	public JsonResult post01(GuestbookVo vo) {
		System.out.println(vo);
		// Service -> Repository : DB insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
		// return JsonResult.fail("Exception ...");
	}
	
	@ResponseBody
	@RequestMapping(value = "/post02", method = RequestMethod.POST)
	public JsonResult post02(@RequestBody GuestbookVo vo) {
		System.out.println(vo);
		// Service -> Repository : DB insert 성공한 후,
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
		// return JsonResult.fail("Exception ...");
	}
}
