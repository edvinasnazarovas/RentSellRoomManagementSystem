## Opisanie Algorytmów:

###  KMPsearch

``sortPriceBtn`` (typ: ``Element``): Przycisk sortujący pokoje według ceny.

``searchInput`` (typ: ``Element``): Pole tekstowe do wprowadzania wzorca wyszukiwania.

``searchBtn`` (typ: ``Element``): Przycisk rozpoczynający wyszukiwanie.

``matchedRooms`` (typ: ``Array``): Tablica przechowująca dopasowane pokoje.

### Funkcje:
``quicksort`` (typ: ``funkcja``): Implementuje algorytm sortowania szybkiego (quicksort) dla tablicy pokoi.

``computeLPSArray`` (typ: ``funkcja``): Oblicza tablicę LPS (Longest Proper Prefix which is also Suffix) dla podanego 
wzorca.

``KMPSearch`` (typ: ``funkcja``): Wykonuje algorytm wyszukiwania wzorca KMP (Knuth-Morris-Pratt) dla każdego pokoju w tablicy pokoi.

``displayRooms`` (typ: ``funkcja``): Wyświetla pokoje w tabeli na stronie.


  
## Typy każdego parametru w Algorytmach:
``sortPriceBtn``, ``searchInput``, ``searchBtn`` są elementami interfejsu użytkownika, które są pobierane za pomocą selektorów dokumentu (``querySelector``). Przycisk ``sortPriceBtn`` służy do uruchamiania sortowania pokoi według ceny, ``searchInput`` to pole tekstowe, w którym wprowadza się wzorzec wyszukiwania, a ``searchBtn`` to przycisk rozpoczynający wyszukiwanie.

``matchedRooms`` to tablica, która służy do przechowywania dopasowanych pokoi.

### Funkcje:
``quicksort`` to funkcja, która implementuje algorytm sortowania szybkiego (``quicksort``) dla tablicy pokoi. Sortowanie odbywa się na podstawie pola price w obiektach pokoju.
``computeLPSArray`` to funkcja, która oblicza tablicę ``LPS`` (Longest Proper Prefix which is also Suffix) dla podanego wzorca. Ta funkcja jest wykorzystywana w algorytmie wyszukiwania wzorca KMP.
``KMPSearch`` to funkcja, która wykonuje algorytm wyszukiwania wzorca ``KMP`` (Knuth-Morris-Pratt) dla każdego pokoju w tablicy pokoi. Wzorzec wyszukiwania jest pobierany z searchInput. Dopasowane pokoje są dodawane do tablicy matchedRooms.
``displayRooms`` to funkcja, która wyświetla pokoje z tablicy ``matchedRoom``s w tabeli na stronie. 
Algorytmy pokoju jest reprezentowana jako obiekty z różnymi polami, takimi jak type, ``location``, ``size``, ``amenities``, ``description``,``price``, ``price_freq``, ``createdAt``, ``updatedAt`` i ``UserId``. Każde pole ma określony typ danych, takie jak ciąg znaków (string) lub liczba (number), które przechowują odpowiednie informacje o pokoju, takie jak typ, lokalizację, rozmiar, udogodnienia, opis, cena, częstotliwość płatności, datę utworzenia, datę aktualizacji i identyfikator użytkownika.


## Język programowania:
Rent/Sell Management System może być zaimplementowany w różnych językach programowania, lecz w Node.js. Istnieje kilka powodów, dla których Node.js może być dobrym wyborem do tworzenia takiego systemu:

* Efektywność w obsłudze operacji we/wy: Node.js jest oparty na asynchroniczności i zdarzeniach, co sprawia, że doskonale radzi sobie z obsługą wielu operacji we/wy jednocześnie. W przypadku systemu zarządzania wynajmem/sprzedażą, gdzie wiele użytkowników może jednocześnie korzystać z systemu, asynchroniczność Node.js może zapewnić wydajne przetwarzanie żądań i odpowiedzi.

* Rozbudowany ekosystem i biblioteki: Node.js posiada ogromną społeczność i rozbudowany ekosystem, co oznacza, że istnieje wiele gotowych bibliotek i narzędzi, które mogą być przydatne przy tworzeniu Rent/Sell Management System. Na przykład, biblioteki takie jak Express.js czy Sequelize mogą ułatwić tworzenie interfejsu API, obsługę routingu, zarządzanie bazą danych itp.

* Skalowalność: Node.js jest znany ze swojej zdolności do obsługi dużej liczby równoczesnych połączeń. Dzięki temu można łatwo skalować Rent/Sell Management System w przypadku wzrostu liczby użytkowników lub zwiększonego obciążenia systemu.

* Real-time communication: Node.js jest również idealny, jeśli w systemie istnieje potrzeba komunikacji w czasie rzeczywistym, na przykład w przypadku powiadomień o dostępności pokoi, aktualizacji rezerwacji itp. Za pomocą bibliotek takich jak Socket.io, można łatwo implementować komunikację w czasie rzeczywistym między klientem a serwerem.

  
## Opis struktury (organizacja katalogowa) i nazwy plików:
W projekcie Rent/Sell Managment System był pisany kod w branch ``master``

## Branch master
 📂  bin - W tym folder najdująsie ``www``
   
📄  ``www`` - Plik zawira  Inicjacjilizowanie sequelize w bin/www

📂 Config - Folder z  ``config.js``

📄  ``config.js`` - Username w config zamieniony na postgres

📂 Controllers - To folder z ``landing.js`` i ``user.js``

📄  ``landing.js`` - to plik zawiera Dobawione dropdown, model dla tabeli Rooms

📄 ``user.js`` - to plik Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📂 migrations - to folder z  ``CreateUserTable.js``, ``CreateRoomTable.js``, ``CreateBookingTable.js``,``CreatePaymentTable.js`` i  ``CreateAdminTable.js``

📄  ``CreateUserTable.js`` - plik  zawiera Dodano dobawiania info w bazę danych z strony index.

📄  ``CreateRoomTable.js`` - plik  zawiera Dobawione dropdown, model dla tabeli Rooms

📄 ``CreateBookingTable.js`` - to plik  Dodano kilka tabel, stronę pokoi

📄 ``CreatePaymentTable.js`` - to plik Dodano kilka tabel, stronę pokoi

📄  ``CreateAdminTable.js`` - to plik  Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort
 
📂 models - to folder z  ``User.js``, ``index.js``, ``Admin.js``, ``Booking.js``, ``Payment.js`` i ``Room.js``
  
📄  ``Admin.js`` - to plik  Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📄  ``Booking.js`` - to plik Dodano kilka tabel, stronę pokoi

📄  ``Payment.js`` - to plik Dodano kilka tabel, stronę pokoi

📄  ``Room.js``- to plik Dodano kilka tabel, stronę pokoi
   
📄  ``User.js`` - to pliku w którym zawiera się Dodano dobawiania info w bazę danych z strony index.

📄  ``index.js`` to pliku w którym zawiera się Dobawiono Sequelize i pakiety pg

📂  public - w tym folder znachodzą się folder z images, folder javascripts i folder stylesheets

📂  images - to folder w którym znajduje się ``door-open-fill.svg``

📄 ``door-open-fill.svg`` to plik Dobawiono ikonkę i naprawiono navbar, pomieniano pozycje input fieldów

📂  javascripts - W tym folder znajduje się ``rooms.js``, ``sortRomms.js`` i ``user.js``

📄  ``rooms.js`` - to plik Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📄 ``sortRomms.js`` - to plik  Zaimplementowano KMPsearch

📄  ``user.js`` - to plik  Dobawiono dropdown, model dla tabeli Rooms

📂  stylesheets -  W tym folder z ``style.css``

 📄  ``style.css`` - to plik Dobawiono Sequelize i pakiety pg

📂 routes - to folder z ``index.js`` i ``users.js``

📄  ``index.js`` - to plik  Zaimplementowano drogę delete User za pomocą ajax

📜  ``users.js`` - to plik Dobawiono Sequelize i pakiety pg

📂 views - to folder z ``error.pug ``, ``landing.pug`` i ``user.pug`` także  common folder , folder user i room folder

📄  ``error.pug `` - to plik  Dobawiono ikonkę i naprawiono navbar, pomieniano pozycje input fieldów

📜  ``landing.pug`` - to plik Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📂 common - to folder ``footer.pug``, ``head.pub`` i ``navbar.pub``

📄  ``footer.pug`` - to plik  Dobawiono ikonkę i naprawiono navbar, pomieniano pozycje input fieldów

📄  ``head.pub`` - to plik  Dobawiono common header i footer w plikach pug

📄  ``navbar.pub`` - to plik  Dobawiono ikonkę i naprawiono navbar, pomieniano pozycje input fieldów

📂 room - to folder ``add_room.pug``, ``room-Admin.pug``, ``room.pug``, ``rooms-Admin.pug`` i ``rooms.pug``

📄 ``add_room.pug`` - to plik Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📄 ``room-Admin.pug`` - to plik Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📄 ``rooms-Admin.pug`` - to plik  Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📄 ``rooms.pug`` - to plik Zaimplementowano KMPsearch 

📂 user - to folder z ``edit_user.pug`` i ``user.pub``

📄 ``edit_user.pug` - to plik Naprawiono funckję edit

📜  ``user.pub`` - to plik Dobawiono dropdown, model dla tabeli Rooms

📜  ``.gitignore`` - to plik z Dobawiono Sequelize i pakiety pg

📜  ``.sequelizerc`` - to plik Dobawiono Sequelize i pakiety pg

📜  ``app.js`` - to plik Dodano trocha funkcji dla admin i zaczelo implementowac sie quicksort

📜   ``package-lock.json`` - to plik Dodano kilka tabel, stronę pokoi

📜  ``package.json`` - Zainstaliowano pakiety dla ig# 

📜  ``passport_setup.js`` - to plik Dodano kilka tabel, stronę pokoi
  
## Algorytmy i struktury danych, beda używane w projekcie:
### Struktury danych 
Nie było używane 

### Algorytmy

### KMPsearch
* Algorytm KMP jest wydajnym algorytmem, który unika niepotrzebnych porównań, wykorzystując informacje o wcześniej dopasowanych znakach we wzorcu. Przetwarza wstępnie wzorzec w celu skonstruowania częściowej tabeli odpowiedników, znanej również jako „funkcja błędu” lub „tablica lps”. Ta tabela pomaga określić liczbę znaków do pominięcia w tekście w przypadku wystąpienia niezgodności.

![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/115026224/40838ac6-1e44-4de2-a531-a89917245f08)

* ``KMPSearch`` to funkcja, która wykonuje algorytm wyszukiwania wzorca ``KMP`` (Knuth-Morris-Pratt) dla każdego pokoju w tablicy pokoi. Wzorzec wyszukiwania jest pobierany z searchInput. Dopasowane pokoje są dodawane do tablicy matchedRooms.

### Quicksord
* Quicksort ma średnią złożoność czasową O(n log n) i złożoność czasową najgorszego przypadku O(n^2), gdy wybór przestawny jest niezrównoważony. Jednak najgorszy scenariusz zdarza się rzadko i można go złagodzić, wybierając dobry obrót lub stosując losowy wybór przestawny

![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/115026224/58fe7473-f967-4940-85b5-bce29451e035)

* ``Quicksort`` to funkcja, która implementuje algorytm sortowania szybkiego (``quicksort``) dla tablicy pokoi. Sortowanie odbywa się na podstawie pola price w obiektach pokoju.

  
## Funkcje (dane wejściowe i wyjściowe):
### Ta funkcja przedstawia Rejestracja
![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/93229121/a0794b4d-3529-4f7a-a2d6-40a1a72e62a8)
* Funkcja sign up pozwala użytkowniku zarejestrować się.

* Email - użytkowniku  wpisuje swój e-mail do  tablica

* First Name - użytkowniku  w pisuje swoje imie 

* Last Name - użytkowniku   w pisuje swoje nazwisko

* Phone number - w tej tablicy  w pisuje swój numer telefonu 

* Country i City - tej tablicy w pisuje państwa i maista

* Address - w tablicy w pisuje adres za mieszkanie 

* Password -  w tej tablicy użytkowniku w pisuje hasło 

* log in here - to jeżeli użytkownik juz ma zrobiony account 

### Ta funkcja przedstawia  Logowanie się
![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/93229121/60e7c76f-b7f9-40b1-ae3e-002cb3515f81)
* Funkcja logowania się pozwala użytkownikom zalogować się.

* Email - użytkowniku  wpisuje swój e-mail do  tablica

* Password -  w tej tablicy użytkowniku w pisuje hasło 

* Reset here - taje użytkowniku za mienić hasło jeżeli był zapomniany

### Ta funkcja przedstawia  Wylogowanie się

![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/93229121/52a47f42-0b08-4caa-85f2-4b2483be460a)
* Funkcja pozwala użytkownikom wylogować się.

### Ta funkcja przedstawia Rooms
![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/93229121/a10b6036-6426-43a5-aaa2-98ace16b2bdf)
* Funkcja pozwala użytkownikom przepatrzeć pokoje.

* Funkcja add room pozwala dodawać pokoje 

* Funkcja Sort by price to sortuje po kryteriam  na przykład po cenia 

### Ta funkcja przedstawia Add Room
![image](https://github.com/Noxisa/Rent-Sell-Room-Management-System/assets/93229121/01a970cf-524a-4999-93c8-278c447a7c23)
* Funkcja pozwala użytkownikom dodać pokoje.
