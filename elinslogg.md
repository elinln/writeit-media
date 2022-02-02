15/12 -
Skapade filerna med create-react-app och började förfina filerna. 

28/12 -
Gjorde ändringar i filstrukturen och vi fixade tillsammans så att alla de nödvändiga komponenterna finns tillgängliga. Grunden för hela hemsidan är nu klar. 

1/1 -
Började jobba med headern och valde vilka färgskalor som passade till hemsidan.

4/1 -
Fortsatte jobba med headern och laddade ner Bootstrap för olika funktioner.

5/1 -
Använde Bootstrap för att göra fint på frontend-delen, både header och startsida.

7/1 -
Styleade bilder, logga och diagram till startsidan.

10/1 - 
La in allt jag gjorde innan på startsidan och fixade komponenter till alla olika sidor så vår Offcanvas länkade rätt till alla sidor/filer.

11/1 -
Kollade på fav.icon, gjorde logga till fliken på hemsidan. Skapade content till Contact Us-sidan och About Us-sidan i företaget. 

12/1 -
Hade intervju inför LIA, sedan jobbade jag mer med content till hemsidan. Så som text om företaget, columner för FAQ och lite mer ändringar i navigeringen på vår Offcanvas. Skapade även en JSON fil för tjänsterna (produkterna) och gjorde så de renderas ut på sidan.

13/1 -
Började bygga i vår server.js fil för att få igång backend-delen som ska kopplas till Stripe. Började försöka spara produkterna i Localstorage när man lägger till de i kundvagnen.

14/1 -
Fortsatte koppla produkterna från json-filen till vårt Stripe-konto.

17/1 - 
Skapade Miss Hosting konto för att försöka hosta sidan, la till domännamn och bekantar mig med sidan. Försöker få till en Toast när man lägger till en produkt i kundvagnen. 

18/1 -
Fortsättning med att skriva content på bland annat FAQ och Clients & Partners. 

19/1 -
Utvecklar tjänsterna och fortsätter med kundvagnen. Möte med min LIA-plats på eftermiddagen för att skriva under handlingsplanen. Efter mötet med LIA så fortsatte jag med att läsa på om kopplingen mellan Stripe och localstorage för att få rätt produkter kopplade till backend-delen. La även till mer content och design på startsidan.

21/1 - 
Funderade på hur många tjänster man ska kunna lägga till. Rimligtvis är det bara 1 (rätt självklart) men då får jag sitta och strukturera om i koden. Tror det är mer värt att bara kunna köpa en tjänst, det är med rimligt än att kunna lägga till flera olika paket. 

22/1 -
Blev klar med kundvagnssidan, ska fortsätta med checkouten till Stripe nu. 

23/1 -
Söndag idag så jag skapade bara Lets Encrypt SSL certifikat och pushade upp mina ändringar så de kommer upp på den hostade sidan. 

24/1 -
Idag skapade jag först kopplingen till Stripe och sedan skapade jag en databas som jag kopplade till vår backend av sidan. Försökte koppla den till frontend också men ska fortsätta vidare med det. 

25/1 -
Klar med signup-sida och hela kopplingen till databasen.

26/1 -
Jag blir helt otroligt frustrerad på Stripe så det har jag suttit med hela dagen och inte kommit någonstans :):):):):)

27/1 - 
Blev för frustrerad på Stripe så fortsatte med lite databas ändringar och mer text och content på Team & Leadership, FAQ osv.

28/1 -
Körde halvdag, skulle iväg på eftermiddagen. Gjorde samma som dagen innan. 

31/1 -
Börjat kolla närmare på Stripe. Kikat runt på vilka källor som är bäst att använda sig av, hittade några bra som jag började testa mig fram med i koden men ska fortsätta mer imon.

1/2 - 
Idag har jag suttit som en galning med Stripe hela dagen och försöker fortfarande komma fram till en bra lösning, vill använda <PaymentElement> men det pajjar hela appen så får bli <CardElement> om jag inte hittar en bättre lösning som kan koppla till orders.json.

2/2 -
Idag fick jag äääntligen till så att Stripe fungerar!!! Funderar på hur flödet på hemsidan ska vara med kundvagnen och betalningen, eftersom de är tjänst blir de lite fel att handla flera tjänster och därför känns kundvagnnsidan rätt onödig... Men efter Stripe började fungera fixade jag så att ordrarna sparas i databasen istället för orders.json och att successful/cancelled sidorna efter kundens betalning ser rätt ut och att kunden landar på rätt sida. 