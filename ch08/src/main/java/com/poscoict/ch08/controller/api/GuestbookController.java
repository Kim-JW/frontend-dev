package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@ResponseBody
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
		// guestbookService.addMessage(vo);
		vo.setNo(1L);
		vo.setPassword("");
		
		// JavaScript에게 렌더링을 위해 날려줘야한다. 
		
		return JsonResult.success(vo);
		
	}
	
	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public JsonResult ex01(@RequestParam(value="sn", required = true, defaultValue = "-1") Long no) {
		// guestbookService.getMessageList(no);
		
		List<GuestbookVo> list = new ArrayList<GuestbookVo>();
		
		GuestbookVo vo3 = new GuestbookVo();
		
		vo3.setNo(3L);
		vo3.setName("둘리3");
		vo3.setMessage("안녕3");
		list.add(vo3);
		
		GuestbookVo vo2 = new GuestbookVo();
		
		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("안녕2");
		list.add(vo2);
		
		GuestbookVo vo1 = new GuestbookVo();
		
		vo1.setNo(1L);
		vo1.setName("둘리1");
		vo1.setMessage("안녕1");
		list.add(vo1);
		
		return JsonResult.success(list);
		
	}
}
