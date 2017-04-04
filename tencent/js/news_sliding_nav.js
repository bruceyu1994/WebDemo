//滑动门
function sliding_gate(num, count)
{
	for(var id=0; id<count; id++)
	{
		if(id == num)
		{
			document.getElementById("news_content"+id).style.display="block";
			document.getElementById("news_nav"+id).className="sliding_gate";
		}
		else
		{
			document.getElementById("news_content"+id).style.display="none";
			document.getElementById("news_nav"+id).className="sliding_gate_none";
		}
	}
}

function sliding_gate_view(num, count)
{
	for(var id=0; id<count; id++)
	{
		if(id == num)
		{
			document.getElementById("view"+id).style.display="block";
			document.getElementById("news_center_middle_nav"+id).className="sliding_gate";
		}
		else
		{
			document.getElementById("view"+id).style.display="none";
			document.getElementById("news_center_middle_nav"+id).className="sliding_gate_none";
		}
	}
}

//滑动导航
window.onload = function()
{
	var nav_area_id = document.getElementById("nav_area_id");
	var slide_box = document.getElementById("slide_nav_area");
	var slide_button = document.getElementById("slide_button");
	var flag = true, timer = null, left_dis=882, border_left = 0;

	slide_button.onclick = function ()
	{
		//根据状态flag执开展开收缩
		if (flag)
		{
			left_dis = 881;
			timer = setInterval(slideopne, 1);
		} 
		else
		{
		   left_dis = 610;
		   timer = setInterval(slideclose, 1);
		}
	}

	nav_area_id.onmouseover = function (e)
	{
		if( !e ) 
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{ 
			if(!flag)
			{
				document.getElementById("slide_button").className="opened";
			}
			else
			{
				document.getElementById("slide_button").className="selected";
			}
		}
	}

	nav_area_id.onmouseout = function (e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.toElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;
		if( reltg != this )
		{ 
			document.getElementById("slide_button").className="unselected";
			if(!flag)
			{
				left_dis = 610;
				timer = setInterval(slideclose, 1);
			}
		}
	}
	//展开
	function slideopne()
	{
		document.getElementById("slide_button").className="opened";
		if (left_dis <= 610)
		{
		   clearInterval(timer);
		   flag = !flag;
		   return false;
		}
		else
		{
		   left_dis -= 10;
		   slide_box.style.left = left_dis + 'px';
		}
	}
	//收缩
	function slideclose()
	{
		document.getElementById("slide_button").className="unopened";
		if (left_dis >= 880)
		{
		   clearInterval(timer);
		   flag = !flag;
		   return false;
		} 
		else 
		{
		   left_dis += 10;
		   slide_box.style.left = left_dis + 'px';
		}
	}

	//社会
	var society = document.getElementById("society_id");
	society.onmouseover = function(e)
	{
		if( !e ) 
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;  
		if( reltg != this )
		{ 
			document.getElementById("society_hd_top").style.background="#f5fafe";
			document.getElementById("society_hd_top_p").style.zIndex = 1;
			document.getElementById("society_hd_top_p").style.display="block";
		}
	}
	society.onmouseout = function(e)
	{
		if( !e ) 
			e = window.event;  
		var reltg = e.relatedTarget ? e.relatedTarget : e.toElement;  
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;  
		if( reltg != this )
		{  
			// 这里可以编写 onmouseleave 事件的处理代码  
			document.getElementById("society_hd_top").style.background="#ffffff";
			document.getElementById("society_hd_top_p").style.zIndex = -1;
			document.getElementById("society_hd_top_p").style.display="none";
			document.getElementById("orderContent").style.zIndex= -1;
			document.getElementById("orderContent").style.display="none";
	   }  
	}

	var society_hd_top_p = document.getElementById("society_hd_top_p");
	society_hd_top_p.onmouseover = function(e)
	{
		if( !e ) 
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{ 
			document.getElementById("orderContent").style.zIndex= 1;
			document.getElementById("orderContent").style.display="block";
		}
	}

	var orderContent = document.getElementById("orderContent");
	orderContent.onmouseout = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.toElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;
		if( reltg != this )
		{ 
			document.getElementById("orderContent").style.zIndex= -1;
			document.getElementById("orderContent").style.display="none";
		}
	}

	//儒学 / 佛学 / 道学
	var frd = document.getElementById("frd_area");
	frd.onmouseover = function(e)
	{
		if( !e ) 
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;  
		if( reltg != this )
		{ 
			document.getElementById("frd_hd_top").style.background="#f5fafe";
			document.getElementById("frd_hd_top_p").style.zIndex = 1;
			document.getElementById("frd_hd_top_p").style.display="block";
		}
	}
	frd.onmouseout = function(e)
	{
		if( !e ) 
			e = window.event;  
		var reltg = e.relatedTarget ? e.relatedTarget : e.toElement;  
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;  
		if( reltg != this )
		{  
			// 这里可以编写 onmouseleave 事件的处理代码  
			document.getElementById("frd_hd_top").style.background="#ffffff";
			document.getElementById("frd_hd_top_p").style.zIndex = -1;
			document.getElementById("frd_hd_top_p").style.display="none";
			document.getElementById("frd_orderContent").style.zIndex= -1;
			document.getElementById("frd_orderContent").style.display="none";
	   }  
	}

	var frd_hd_top_p = document.getElementById("frd_hd_top_p");
	frd_hd_top_p.onmouseover = function(e)
	{
		if( !e ) 
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{ 
			document.getElementById("frd_orderContent").style.zIndex= 999;
			document.getElementById("frd_orderContent").style.display="block";
		}
	}

	var frd_orderContent = document.getElementById("frd_orderContent");
	frd_orderContent.onmouseout = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.toElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode;
		if( reltg != this )
		{ 
			document.getElementById("frd_orderContent").style.zIndex= -1;
			document.getElementById("frd_orderContent").style.display="none";
		}
	}
//	//更换频道
//	var lis = document.getElementById("sh_orderbd_ul").getElementsByTagName("li");
//	var ul_click = false, click_Index = -1;
//	for(var i = 0; i < lis.length; i++)
//	{
//		lis[i].onclick = function ()
//		{
//			alert($this.index());
//			ul_click = true;
//			click_Index = i;
//			var a = this.getElementsByTagName("a");
//			if(a.length > 0)
//			{
//				this.removeChild(a[0]);
//				var span = document.createElement('span');   //创建a标签
//				span.innerHTML = '于哲';   //给a标签添加内容
//				this.appendChild(span);  //将a标签添加到div里面
//				this.className = "selected";
//			}
//			change_bgColor();
//		}
//	}
//
//	function change_bgColor()
//	{
//		if(ul_click)
//		{
//			for(var i = 0; i < lis.length; i++)
//			{
//				if(i != click_Index)
//				{
//					var c = lis[i].className;
//					if(c != null && c.indexOf('selected') > -1)
//					{
//						lis[i].className = c.replace('selected', '');
//						var span = lis[i].getElementsByTagName("span");
//						if(span.length > 0)
//						{
//							var content = span[0].textContent;
//							lis[i].removeChild(span[0]);
//							var a = document.createElement('a');   //创建a标签
//							a.innerHTML = content;   //给a标签添加内容
//							lis[i].appendChild(a);  //将a标签添加到li里面
//						}
//					}
//				}
//			}
//			ul_click = false;
//		}
//	}

	var slideArea = document.getElementById("slideArea");
	slideArea.onmouseover = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{
			document.getElementById("visualup").className="prev";
			document.getElementById("visualdown").className="next";
		}
	}

	slideArea.onmouseout = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{
			document.getElementById("visualup").className="prev_default";
			document.getElementById("visualdown").className="next_default";
		}
	}

	var visualup = document.getElementById("visualup");
	var visualdown = document.getElementById("visualdown");
	visualup.onmouseover = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{
			document.getElementById("visualup").style.opacity = 0.8;
		}
	}

	visualup.onmouseout = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{
			document.getElementById("visualup").style.opacity = 0.7;
		}
	}

	visualdown.onmouseover = function(e)
	{
		if( !e )
		{
			e = window.event; 
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{
			document.getElementById("visualdown").style.opacity = 0.8;
		}
	}

	visualdown.onmouseout = function(e)
	{
		if( !e )
		{
			e = window.event;
		}
		var reltg = e.relatedTarget ? e.relatedTarget : e.fromElement; 
		while( reltg && reltg != this ) 
			reltg = reltg.parentNode; 
		if( reltg != this )
		{
			document.getElementById("visualdown").style.opacity = 0.7;
		}
	}

	var _focus_direction = true;
	visualup.onclick = function()
	{
		_focus_direction = false;
		autoExecAnimate();
		changeBtn(_focus_pos);
	}

	visualdown.onclick = function()
	{
		_focus_direction = true;
		autoExecAnimate();
		changeBtn(_focus_pos);
	}

	var _focus_pos = 0;
	var _focus_li_length = 168;

	function autoExecAnimate() {
		if (_focus_direction) {
			if (_focus_pos == 12) {
				_focus_pos = 0;
			}
			else
				_focus_pos += 6;
		} 
		else {
			if (_focus_pos == 0) {
				_focus_pos = 12;
			}
			else
				_focus_pos -= 6;
		}
		$("#mypic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
		var moveLen = _focus_pos * _focus_li_length;
		$("#bigSlideUl").animate({
			left: "-" + moveLen + "px"
		},
		600);
	}

	function autoExecAnimate2()
	{
		$("#mypic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
		var moveLen = _focus_pos * _focus_li_length;
		$("#bigSlideUl").animate({
			left: "-" + moveLen + "px"
		},
		600);
	}
	var divs = document.getElementById("warpper_btn").getElementsByTagName("div");
	divs[0].onclick = function()
	{
		_focus_pos = 0*6;
		changeBtn(_focus_pos);
		autoExecAnimate2();
	}
	divs[1].onclick = function()
	{
		_focus_pos = 1*6;
		changeBtn(_focus_pos);
		autoExecAnimate2();
	}
	divs[2].onclick = function()
	{
		_focus_pos = 2*6;
		changeBtn(_focus_pos);
		autoExecAnimate2();
	}
}

//btn转换
function changeBtn(_focus_pos)
{
	var divs = document.getElementById("warpper_btn").getElementsByTagName("div");
	for(var i=0; i<=12; i+=6)
	{
		if(i == _focus_pos)
		{
			divs[i/6].className = "current";				
		}
		else
		{
			divs[i/6].className = "fefault_btn";
		}
	}
}

//btn点击事件
//function BtnClick(index)
//{
//	var divs = document.getElementById("warpper_btn").getElementsByTagName("div");
//	_focus_pos = index*6;
//	changeBtn(_focus_pos);
//	autoExecAnimate();
//}

//市场行情滑动菜单
function sliding_nav_market(num, count)
{
	for(var id=0; id<count; id++)
	{
		if(id == num)
		{
			document.getElementById("financeContent"+id).style.display="block";
			document.getElementById("nav_a"+id).className="selected";
		}
		else
		{
			document.getElementById("financeContent"+id).style.display="none";
			document.getElementById("nav_a"+id).className="unselected";
		}
	}
}

//	星座运势
function valueChange()
{
	var arrs = new Array(12); 
	arrs[0] = "今日的白羊们，工作时会觉得没精神，提不起干劲，情绪有些低落，脾气变得易怒，觉得内心有股无名...";
	arrs[1] = "稳扎稳打，按部就班的推进工作，一切都在按照计划进行，这让你很安心，之前付出的努力都很值得。...";
	arrs[2] = "本日的你，在工作中要多多注意人际关系，与同事、领导沟通工作的时候，表达自己的意见是很好，...";
	arrs[3] = "工作氛围内的焦灼状态，让你很多工作都没办法顺利开展，而你又碍着自身的面子不想主动去和解这个...";
	arrs[4] = "今日的你，承受了诸多来自工作中的压力，你和你的团队都需要你花费更多的时间来面对、解决这个问...";
	arrs[5] = "今日的你依旧为了工作努力着，不要怕你的付出得不到回报，此时，你可能看不到明显的收获，你的努...";
	arrs[6] = "今日的你依旧沉浸在苦闷的工作中无法自拔，连带着感受到的办公室氛围都很紧绷，连续的加班加点工...";
	arrs[7] = "有时想要假装胡涂些，不计较些，避开些是非，并没有错。只是有时内心还是会计较，不甘心，没办法...";
	arrs[8] = "如果你心里有什么想要实现的，无论是在工作上还是生活上，今天就去做吧。相信你已经关注它很久，...";
	arrs[9] = "原本做了孤注一掷的打算，今日一上班之前打算一下子被打翻，发生了喜剧性的变化。而且是好方向的...";
	arrs[10] = "幸运不会一直围绕着你，而不幸未必就是灾难，它也是帮助你成长的动力。工作进展与预期方向有些偏...";
	arrs[11] = "我们内心那个贪玩的小孩已经长大，我们可以不再以来别人自己来保护自己的。不经事永远不会知道自...";
	var objs = document.getElementById("select_id");
	var p_txt = document.getElementById("p_txt");
	var value = objs.options[objs.selectedIndex].value;
	document.getElementById("fortune_bg").className="bg_img"+value;
	document.getElementById("fortuneIndex").className="fortune"+value;

	p_txt.innerText = arrs[value];
	   
	var p_txta = document.createElement('a');   //创建a标签
	p_txta.href = '#';    //增加a标签的href属性
	p_txta.innerHTML = '[详细]';   //给a标签添加内容
	p_txt.appendChild(p_txta);  //将a标签添加到div里面
}