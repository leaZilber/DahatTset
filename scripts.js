document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    {
      title: "החדשנות בביטחון הלאומי",
      desc: "ניתוח עדכני של השפעת החדשנות הטכנולוגית על ביטחון המדינה, תוך בחינת מגמות עולמיות, שיתופי פעולה אסטרטגיים ואתגרי האיזון בין קדמה טכנולוגית לשמירה על סודיות וביטחון מידע.",
      date: "2025-01-10",
      type: "type1",
      subject: "topic1",
      author: "ד\"ר ישראל ישראלי",
      img: "images/war2.png",
      link: "#"
    },
    {
      title: "מאמר החושף כיצד ישראל משלבת בין יצירתיות, טכנולוגיה ותעוזה ביטחונית כדי להבטיח את ביטחונה בעידן של איומים משתנים ופתרונות חכמים",
      desc: "ניתוח כלכלי של האתגרים החברתיים בישראל והשפעתם על היציבות הלאומית.",
      date: "2025-02-14",
      type: "type2",
      subject: "topic1",
      author: "פרופ' דנה לוי",
      img: "images/war2.png",
      link: "#"
    },
    {
      title: "יחסים בינלאומיים במאה ה-21",
      desc: "הזדמנויות ואתגרים חדשים ביחסי החוץ של ישראל בזירה הגלובלית.",
      date: "2025-03-01",
      type: "type1",
      subject: "topic2",
      author: "מר אלון בר",
      img: "images/war2.png",
      link: "#"
    },
    {
      title: "ניהול משברים במזרח התיכון",
      desc: "סקירה מקיפה של התהליכים המדיניים והביטחוניים באזורנו.",
      date: "2025-04-18",
      type: "type2",
      subject: "topic2",
      author: "ד\"ר מיכל כהן",
      img: "images/war2.png",
      link: "#"
    },
    {
      title: "טכנולוגיה וסייבר: האתגר הבא",
      desc: "מבט על עתיד הביטחון הסייברני במרחב הדיגיטלי המשתנה.",
      date: "2025-05-22",
      type: "type1",
      subject: "topic1",
      author: "ד\"ר עמית גולן",
      img: "images/war2.png",
      link: "#"
    },
    {
      title: "אנרגיה ואקלים כגורמים אסטרטגיים",
      desc: "השפעת משבר האקלים על המדיניות הביטחונית הישראלית והאזורית בעשור הקרוב.",
      date: "2025-06-10",
      type: "type2",
      subject: "topic2",
      author: "פרופ' נועה רון",
      img: "images/war2.png",
      link: "#"
    }
  ];
  const container = document.getElementById("cardsContainer"); 
  const searchBtn = document.getElementById("searchBtn"); 

  function renderCards(list) {
    container.innerHTML = "";

    // אם אין תוצאות - מציג הודעה
    if (list.length === 0) {
      container.innerHTML = `<div class="no-results">לא נמצאו תוצאות לחיפוש</div>`;
      return;
    }

    list.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-lg-6 col-md-6 col-sm-12';
      // col-lg-6 = 50% בדסקטופ (2 בשורה)
      // col-md-6 = 50% בטאבלט (2 בשורה)
      // col-sm-12 = 100% במובייל (1 בשורה)

      const card = document.createElement('a');
      card.href = item.link;
      card.className = 'publication-card';

      // ממלא את תוכן הכרטיס עם HTML
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="card-body">
          <div class="publication-label">מבט על</div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-text">${item.desc}</p>
          <div class="card-meta">
            <p><strong>${item.author}</strong></p>
            <p>${new Date(item.date).toLocaleDateString("he-IL")}</p>
          </div>
        </div>`;

      colDiv.appendChild(card);
      container.appendChild(colDiv);
    });
  }

  // פונקציה שמסננת כרטיסים לפי קריטריונים
  function filterCards() {
    const type = document.getElementById("type").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const foundBy = document.getElementById("foundBy").value.trim();
    const searchText = document.getElementById("searchText").value.trim();
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;

    const filtered = cards.filter(card => {
      const matchesType = !type || card.type === type;
      const matchesSubject = !subject || card.subject === subject;
      const matchesAuthor = !foundBy || card.author.includes(foundBy);
      const matchesText = !searchText || card.title.includes(searchText) || card.desc.includes(searchText);
      const matchesDate = (!fromDate || new Date(card.date) >= new Date(fromDate)) &&
        (!toDate || new Date(card.date) <= new Date(toDate));

      return matchesType && matchesSubject && matchesAuthor && matchesText && matchesDate;
    });

    renderCards(filtered);
  }

  renderCards(cards);

  searchBtn.addEventListener("click", filterCards);
});