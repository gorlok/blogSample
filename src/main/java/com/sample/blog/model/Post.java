package com.sample.blog.model;

import java.util.Date;

public class Post {
	
	private int id;
	
	private String author;
	
	private String title;
	
	private String content;
	
	private Date createdDate;
	
	public Post() {
	}

	public Post(String author, String title, String content, Date createdDate) {
		super();
		this.author = author;
		this.title = title;
		this.content = content;
		this.createdDate = createdDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

}
