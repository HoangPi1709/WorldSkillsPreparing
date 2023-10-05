const form = document.querySelector('#expense-form');
        const spendingNameInput = document.querySelector('#spending-name');
        const costInput = document.querySelector('#cost');
        const expenseList = document.querySelector('#expense-list');
      
        form.addEventListener('submit', (e) => {
          e.preventDefault();
      
          const spendingName = spendingNameInput.value.trim();
          const cost = costInput.value.trim();
      
          if (!spendingName || !cost) {
            console.log('Có lỗi xảy ra');
            return;
          }
      
          console.log('Đã nhập đúng');
      
          const expenseItem = document.createElement('li');
          expenseItem.textContent = `${spendingName}: ${cost} đồng`;
          expenseList.appendChild(expenseItem);
      
          setTimeout(() => {
            expenseItem.remove();
          }, 3000);
      
          spendingNameInput.value = '';
          costInput.value = '';
        });