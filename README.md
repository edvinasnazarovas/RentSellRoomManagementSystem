 # Rent-Sell-Room-Management-System
Przedstawić przegląd stosowanego lub proponowanego systemu zarządzania wynajmem/sprzedażą pomieszczeń.

Podaj podstawowy schemat pozycji dla następujących kategorii:

* Pokoje: zawiera szczegółowe informacje, takie jak typ pokoju, lokalizacja, rozmiar i udogodnienia.
* Klienci: zawiera szczegółowe informacje, takie jak imię i nazwisko klienta, informacje kontaktowe oraz historia wynajmu/sprzedaży.
* Rezerwacje: zawiera szczegółowe informacje, takie jak daty rezerwacji, rodzaj pokoju i informacje dotyczące płatności.
* Płatności: zawiera szczegółowe informacje, takie jak typ płatności, kwota i status płatności.

# Schematy :

## Rooms : mieszkania

* Room ID : unikalny identyfikator dla każdego mieszkania
* Room Type : jednoosobowy, dwuosobowy, apartament itp.
* Location : budynek, piętro, numer pokoju
* Size : w stopach kwadratowych/metrach
* Amenities : TV, WiFi, klimatyzacja, kuchnia itp.
* Description : krótkie podsumowanie funkcji i zalet pokoju
* Rental Price : na dzień/tydzień/miesiąc

## Customers : klienci

* Customer ID : unikalny identyfikator dla każdego klienta
* Customer Name : imię i nazwisko klienta
* Contact Information : kontakta informacja (e-mail, telefon, adres)
* Rental/Sales History : terminy, pokoje wynajęte/zakupione, dokonane płatności
* Payment Method : karta kredytowa, gotówka, płatność online
## Bookings : zamowienia
* Booking ID : unikalny identyfikator dla każdego zamowienia
* Room ID : powiązany ze schematem Rooms
* Customer ID : powiązany ze schematem Customers
* Booking Dates : daty rozpoczęcia i zakończenia
* Payment Details : zapłacona kwota, metoda płatności, status płatności
##Payments :
* Payment ID : unikalny identyfikator dla każdej wplaty
* Customer ID : powiązany ze schematem Customers
* Booking ID : powiązany ze schematem Bookings
* Payment Amount : wartosc wplaty
* Payment Date : data wplaty
* Payment Method : karta kredytowa, gotówka, płatność online
* Payment Status : opłacone, oczekujące, anulowane

## Functions

* Room Management : Umożliwia administratorowi systemu dodawanie, edytowanie i usuwanie szczegółów pokoju, takich jak typ pokoju, lokalizacja, rozmiar, wyposażenie oraz cena wynajmu/sprzedaży.
* Customer Management : Umożliwia administratorowi systemu dodawanie, edytowanie i usuwanie danych klienta, takich jak imię i nazwisko klienta, informacje kontaktowe, historia wypożyczeń/sprzedaży i metoda płatności.
* Booking Management : Umożliwia administratorowi systemu tworzenie, modyfikowanie i anulowanie rezerwacji pokoi na podstawie życzeń klientów i dostępności.
* Payment Management : Umożliwia administratorowi systemu zarządzanie płatnościami dokonywanymi przez klientów za wynajem/sprzedaż pokoi, w tym śledzenie szczegółów płatności, generowanie faktur i dokonywanie zwrotów w razie potrzeby.
* Reporting and Analytics : Zapewnia szczegółowe raporty i analizy dotyczące różnych aspektów wynajmu lub sprzedaży nieruchomości, takich jak wskaźniki obłożenia, generowane przychody, opinie klientów i inne.

## Roli :

* System Administrator : Odpowiedzialny za zarządzanie systemem zarządzania wynajmem/sprzedażą pokoi, w tym konfigurowanie ustawień systemu, zarządzanie kontami użytkowników i zapewnienie sprawnego działania systemu.
* Customer Service Representative : Odpowiedzialny za pomoc klientom w składaniu wniosków o wynajem/sprzedaż pokoju, odpowiadanie na zapytania i rozwiązywanie problemów pojawiających się podczas procesu rezerwacji i płatności.
* Property Manager : Odpowiedzialny za nadzorowanie wynajmowanych lub sprzedawanych nieruchomości, zarządzanie pokojami i udogodnieniami, zapewnianie satysfakcji klientów oraz nadzorowanie personelu wykonującego rutynową konserwację, sprzątanie i inne zadania związane z nieruchomością.
* Accountant : Odpowiedzialny za zarządzanie finansowymi aspektami działalności związanej z wynajmem lub sprzedażą nieruchomości, w tym za generowanie faktur, zarządzanie płatnościami i zapewnienie dokładnej dokumentacji księgowej.
* Sales Manager : Odpowiedzialny za promocję i sprzedaż wynajmu lub sprzedaży nieruchomości, opracowywanie strategii sprzedaży i nadzorowanie personelu sprzedaży.
