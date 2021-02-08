var tblMember = document.getElementById('tblMember');
		window.onload =  function loadMember()
		{
			var listMember = JSON.parse(localStorage.getItem('listMember'));
			if (listMember != null)
			{
				// display data in the table
				for (var i = 0; i < listMember.length; i++)
				{
					addRow(i+1, listMember[i].fullname, listMember[i].sex, listMember[i].birthday, listMember[i].address, listMember[i].hobby, listMember[i].username, listMember[i].password)	
				}
			}
		}		

		function addMember()
		{
			var fullname = document.getElementById('txtHoTen').value;
			var sex = document.getElementById('selGioiTinh').value;
			var birthday = document.getElementById('txtNamSinh').value;
			var address = document.getElementById('txtDiaChi').value;
			var hobby = document.getElementById('txtSoThich').value;
			var username = document.getElementById('txtTenTaiKhoan').value;
			var password = document.getElementById('txtMatKhau').value;
			saveToLocalStorage(fullname, sex, birthday, address, hobby, username, password);
			// tạo confirm xác nhận chuyển sang trang login hay không
			var x = confirm("Đăng ký thành công, bạn muốn chuyển sang trang đăng nhập không");
			if (x)
				window.location = 'login.html';
		}

		function saveToLocalStorage(fullname, sex, birthday, address, hobby, username, password)
		{
			var member = {
				fullname: fullname,
				sex: sex,
				birthday: birthday,
				address: address,
				hobby: hobby,
				username: username,
				password: password
			};
				
			var listMember = JSON.parse(localStorage.getItem('listMember'));
			if (listMember == null)
				 listMember = []; // init obj array
				 
			listMember.push(member);
			localStorage.setItem('listMember', JSON.stringify(listMember));
			
			// add row in the table
			addRow(listMember.length, fullname, sex, birthday, address, hobby, username, password);

		}

		function addRow(id, fullname, sex, birthday, address, hobby, username, password)
		{
			var row = document.createElement('tr');
			var colID = document.createElement('td');
			colID.textContent = id;

			var colFullname = document.createElement('td');
			colFullname.textContent = fullname;

			var colSex = document.createElement('td');
			colSex.textContent = sex;

			var colBirthday = document.createElement('td');
			colBirthday.textContent = birthday;

			var colAdress = document.createElement('td');
			colAdress.textContent = address;

			var colHobby = document.createElement('td');
			colHobby.textContent = hobby;

			var colUsername = document.createElement('td');
			colUsername.textContent = username;

			var colPassword = document.createElement('td');
			colPassword.textContent = password;

			row.appendChild(colID);
			row.appendChild(colFullname);
			row.appendChild(colSex);
			row.appendChild(colBirthday);
			row.appendChild(colAdress);
			row.appendChild(colHobby);
			row.appendChild(colUsername);
			row.appendChild(colPassword);
			tblMember.appendChild(row);
		}

		function clearAll()
		{
			localStorage.removeItem("listMember");
			var tblMember = document.getElementById('tblMember');
			var tr = tblMember.getElementsByTagName('tr');
			while(tr.length != 1)
				 tblMember.removeChild(tr[1]);
			/*
				- thẻ <tr> thứ 0 là thẻ tiêu đề
				- do xóa 1 row thì index sẽ được cập nhật lại, nên chỉ cần dùng while xóa <tr> thứ [1]
			*/
		}