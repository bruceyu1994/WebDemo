//������
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

//��������
window.onload = function()
{
	var nav_area_id = document.getElementById("nav_area_id");
	var slide_box = document.getElementById("slide_nav_area");
	var slide_button = document.getElementById("slide_button");
	var flag = true, timer = null, left_dis=882, border_left = 0;

	slide_button.onclick = function ()
	{
		//����״̬flagִ��չ������
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
	//չ��
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
	//����
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

	//���
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
			// ������Ա�д onmouseleave �¼��Ĵ������  
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

	//��ѧ / ��ѧ / ��ѧ
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
			// ������Ա�д onmouseleave �¼��Ĵ������  
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
//	//����Ƶ��
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
//				var span = document.createElement('span');   //����a��ǩ
//				span.innerHTML = '����';   //��a��ǩ�������
//				this.appendChild(span);  //��a��ǩ��ӵ�div����
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
//							var a = document.createElement('a');   //����a��ǩ
//							a.innerHTML = content;   //��a��ǩ�������
//							lis[i].appendChild(a);  //��a��ǩ��ӵ�li����
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

//btnת��
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

//btn����¼�
//function BtnClick(index)
//{
//	var divs = document.getElementById("warpper_btn").getElementsByTagName("div");
//	_focus_pos = index*6;
//	changeBtn(_focus_pos);
//	autoExecAnimate();
//}

//�г����黬���˵�
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

//	��������
function valueChange()
{
	var arrs = new Array(12); 
	arrs[0] = "���յİ����ǣ�����ʱ�����û�����᲻��ɾ���������Щ���䣬Ƣ�������ŭ�����������й�����...";
	arrs[1] = "�����ȴ򣬰����Ͱ���ƽ�������һ�ж��ڰ��ռƻ����У�������ܰ��ģ�֮ǰ������Ŭ������ֵ�á�...";
	arrs[2] = "���յ��㣬�ڹ�����Ҫ���ע���˼ʹ�ϵ����ͬ�¡��쵼��ͨ������ʱ�򣬱���Լ�������Ǻܺã�...";
	arrs[3] = "������Χ�ڵĽ���״̬������ܶ๤����û�취˳����չ�������ְ�����������Ӳ�������ȥ�ͽ����...";
	arrs[4] = "���յ��㣬������������Թ����е�ѹ�����������ŶӶ���Ҫ�㻨�Ѹ����ʱ������ԡ���������...";
	arrs[5] = "���յ�������Ϊ�˹���Ŭ���ţ���Ҫ����ĸ����ò����ر�����ʱ������ܿ��������Ե��ջ����Ŭ...";
	arrs[6] = "���յ������ɳ����ڿ��ƵĹ������޷��԰Σ������Ÿ��ܵ��İ칫�ҷ�Χ���ܽ����������ļӰ�ӵ㹤...";
	arrs[7] = "��ʱ��Ҫ��װ��ͿЩ�����ƽ�Щ���ܿ�Щ�Ƿǣ���û�д�ֻ����ʱ���Ļ��ǻ�ƽϣ������ģ�û�취...";
	arrs[8] = "�����������ʲô��Ҫʵ�ֵģ��������ڹ����ϻ��������ϣ������ȥ���ɡ��������Ѿ���ע���ܾã�...";
	arrs[9] = "ԭ�����˹�עһ���Ĵ��㣬����һ�ϰ�֮ǰ����һ���ӱ��򷭣�������ϲ���Եı仯�������Ǻ÷����...";
	arrs[10] = "���˲���һֱΧ�����㣬������δ�ؾ������ѣ���Ҳ�ǰ�����ɳ��Ķ�����������չ��Ԥ�ڷ�����Щƫ...";
	arrs[11] = "���������Ǹ�̰���С���Ѿ��������ǿ��Բ������������Լ��������Լ��ġ���������Զ����֪����...";
	var objs = document.getElementById("select_id");
	var p_txt = document.getElementById("p_txt");
	var value = objs.options[objs.selectedIndex].value;
	document.getElementById("fortune_bg").className="bg_img"+value;
	document.getElementById("fortuneIndex").className="fortune"+value;

	p_txt.innerText = arrs[value];
	   
	var p_txta = document.createElement('a');   //����a��ǩ
	p_txta.href = '#';    //����a��ǩ��href����
	p_txta.innerHTML = '[��ϸ]';   //��a��ǩ�������
	p_txt.appendChild(p_txta);  //��a��ǩ��ӵ�div����
}