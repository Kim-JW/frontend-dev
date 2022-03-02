package com.poscoict.ch08.controller.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="response")
public class XmlResult {
	private String result;
	private GuestBookVo data;
	private String message;
	
	private XmlResult() {
		
	}
	
	private XmlResult(String result, GuestBookVo data) {
		this.result = result;
		this.data = data;
	}

	private XmlResult(String result, String message) {
		this.result = result;
		this.message = message;
	}

	public String getResult() {
		return result;
	}

	public GuestBookVo getData() {
		return data;
	}

	public String getMessage() {
		return message;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public void setData(GuestBookVo data) {
		this.data = data;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public static XmlResult success(GuestBookVo vo) {
		return new XmlResult("success", vo);
	}
	
	public static XmlResult fail(String message) {
		return new XmlResult("fail", message);
	}
	
	

	@XmlRootElement(name="data")
	public static class GuestBookVo	{
		private Long no;
		private String name;
		private String password;
		private String regDate;
		private String message;
		public Long getNo() {
			return no;
		}
		public void setNo(Long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getRegDate() {
			return regDate;
		}
		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		@Override
		public String toString() {
			return "GuestbookVo [no=" + no + ", name=" + name + ", password=" + password + ", regDate=" + regDate
					+ ", message=" + message + "]";
		}
	}
}
