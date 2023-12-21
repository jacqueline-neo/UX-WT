/* portfolio.html */


document.addEventListener("DOMContentLoaded", function () {

    // Thailand
    // Get references to the buttons and other elements
    const langkawiButton = document.getElementById('langkawi');
    const kohlipeButton = document.getElementById('kohlipe');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text-body');
    const modalAdvantage = document.getElementById('advantages');
    const modalDisadvantage = document.getElementById('disadvantages');

    // Set the initial content to display for modal 1
    modalTitle.textContent = 'Koh Lipe';
    modalText.textContent = 'Koh Lipe is a stunning island located in southern Thailand, and it is one of the most beautiful places I have ever visited. The island is known for its crystal clear waters, white sandy beaches, and amazing coral reefs, making it a perfect spot for snorkeling and scuba diving. The island has a relaxed vibe and slow pace of life make it an ideal getaway for those looking to unwind and disconnect from the world. One of the highlights of my trip to Koh Lipe was the beautiful sunrise and sunsets that I witnessed every day. I also enjoyed exploring the island small streets, visiting the local markets and trying out some delicious Thai food. Overall, I highly recommend Koh Lipe to anyone looking for a peaceful and scenic tropical getaway.';
    modalAdvantage.innerHTML = '<strong>Advantages: </strong>Relaxing';
    modalDisadvantage.innerHTML = '<strong>Disadvantages: </strong>Difficult to get there';
    const carouselImages = document.querySelectorAll('#carouselExampleIndicators img');
    carouselImages[0].src = 'images/portfolio/kohlipe1.jpg';
    carouselImages[1].src = 'images/portfolio/kohlipe2.jpg';
    carouselImages[2].src = 'images/portfolio/kohlipe3.jpg';

    // Add event listeners to the buttons
    langkawiButton.addEventListener('click', function () {
        modalTitle.textContent = 'Langkawi';
        modalText.textContent = 'Langkawi is a transit place to board a boat ride to Koh Lipe. Langkawi is a breathtakingly beautiful archipelago of islands located in Malaysia. The lush green forests, turquoise blue waters, and stunning landscapes make it an ideal destination for nature lovers and adventure seekers. The island offers a wide range of activities, from hiking through the lush rainforest to snorkeling in the clear waters of the Andaman Sea. One of the highlights of my visit to Langkawi was the stunning sunset views from the top of the Sky Bridge. The cable car ride up to the Sky Bridge was also an unforgettable experience, offering panoramic views of the island. I also enjoyed exploring the local markets, trying out the delicious street food, and relaxing on the pristine beaches. Overall, Langkawi is a must-visit destination for anyone looking for a unique and unforgettable travel experience.';
        modalAdvantage.innerHTML = '<strong>Advantages: </strong>Variety of Activities';
        modalDisadvantage.innerHTML = '<strong>Disadvantages: </strong>Hard to travel around without a driver';
        carouselImages[0].src = 'images/portfolio/langkawi1.jpg';
        carouselImages[1].src = 'images/portfolio/langkawi2.jpg';
        carouselImages[2].src = 'images/portfolio/langkawi3.jpg';
    });

    kohlipeButton.addEventListener('click', function () {
        modalTitle.textContent = 'Koh Lipe';
        modalText.textContent = 'Koh Lipe is a stunning island located in southern Thailand, and it is one of the most beautiful places I have ever visited. The island is known for its crystal clear waters, white sandy beaches, and amazing coral reefs, making it a perfect spot for snorkeling and scuba diving. The island has a relaxed vibe and slow pace of life make it an ideal getaway for those looking to unwind and disconnect from the world. One of the highlights of my trip to Koh Lipe was the beautiful sunrise and sunsets that I witnessed every day. I also enjoyed exploring the island small streets, visiting the local markets and trying out some delicious Thai food. Overall, I highly recommend Koh Lipe to anyone looking for a peaceful and scenic tropical getaway.';
        modalAdvantage.innerHTML = '<strong>Advantages: </strong>Relaxing';
        modalDisadvantage.innerHTML = '<strong>Disadvantages: </strong>Difficult to get there';
        carouselImages[0].src = 'images/portfolio/kohlipe1.jpg';
        carouselImages[1].src = 'images/portfolio/kohlipe2.jpg';
        carouselImages[2].src = 'images/portfolio/kohlipe3.jpg';
    });

    //New Zealand
    const queenstown = document.getElementById('queenstown');
    const lakesButton = document.getElementById('lakes');
    const nugget = document.getElementById('nugget');
    const others = document.getElementById('others');
    const modalTitle2 = document.getElementById('modal-title2');
    const modalText2 = document.getElementById('modal-text-body2');
    const modalAdvantage2 = document.getElementById('advantages2');
    const modalDisdvantage2 = document.getElementById('disadvantages2');


    // Set the initial content to display for modal 2
    modalTitle2.textContent = 'Queenstown';
    modalText2.textContent = 'Queenstown, New Zealand is a beautiful city located on the South Island. Its stunning natural scenery and adventure activities make it a popular destination for tourists from around the world. The city offers a wide range of activities, from skiing and snowboarding to bungee jumping and skydiving. Overall, Queenstown is a beautiful city with plenty to offer for those who love adventure and nature. However, it is important to keep in mind the potential drawbacks, such as high costs and crowds, when planning a visit.';
    modalAdvantage2.innerHTML = '<strong>Advantages: </strong>Beautiful scenery, with the Remarkables mountain range and Lake Wakatipu providing stunning views.';
    modalDisdvantage2.innerHTML = '<strong>Disadvantages: </strong>More expensive area in terms of accomodations and activities';
    const carouselImages2 = document.querySelectorAll('#carouselExampleIndicators2 img');
    carouselImages2[0].src = 'images/portfolio/queenstown1.jpg';
    carouselImages2[1].src = 'images/portfolio/queenstown2.jpg';
    carouselImages2[2].src = 'images/portfolio/queenstown3.jpg';

    // Add event listeners to the buttons
    queenstown.addEventListener('click', function () {
        modalTitle2.textContent = 'Queenstown';
        modalText2.textContent = 'Queenstown, New Zealand is a beautiful city located on the South Island. Its stunning natural scenery and adventure activities make it a popular destination for tourists from around the world. The city offers a wide range of activities, from skiing and snowboarding to bungee jumping and skydiving. Overall, Queenstown is a beautiful city with plenty to offer for those who love adventure and nature. However, it is important to keep in mind the potential drawbacks, such as high costs and crowds, when planning a visit.';
        modalAdvantage2.innerHTML = '<strong>Advantages: </strong>Beautiful scenery, with the Remarkables mountain range and Lake Wakatipu providing stunning views.';
        modalDisdvantage2.innerHTML = '<strong>Disadvantages: </strong>More expensive area in terms of accomodations and activities';
        carouselImages2[0].src = 'images/portfolio/queenstown1.jpg';
        carouselImages2[1].src = 'images/portfolio/queenstown2.jpg';
        carouselImages2[2].src = 'images/portfolio/queenstown3.jpg';

    });

    lakesButton.addEventListener('click', function () {
        modalTitle2.textContent = 'Lakes';
        modalText2.textContent = 'The lakes of New Zealand are some of the most stunning natural wonders in the world. From the crystal clear waters of Lake Tekapo to the majestic beauty of Lake Wanaka, there is no shortage of breathtaking scenery to be found. The lakes offer a range of activities, from kayaking and fishing to hiking and camping';
        modalAdvantage2.innerHTML = '<strong>Advantages: </strong>The lakes are surrounded by stunning landscapes and provide a serene and tranquil setting to relax in.';
        modalDisdvantage2.innerHTML = '<strong>Disadvantages: </strong>Need to drive a distance and can be crowded during peak tourist season.';
        carouselImages2[0].src = 'images/portfolio/lake1.jpg';
        carouselImages2[1].src = 'images/portfolio/lake2.jpg';
        carouselImages2[2].src = 'images/portfolio/lake3.jpg';

    });

    nugget.addEventListener('click', function () {
        modalTitle2.textContent = 'Nugget Point';
        modalText2.textContent = 'Text about Lakes.';
        modalAdvantage2.innerHTML = '<strong>Advantages: </strong>Nice scenary';
        modalDisdvantage2.innerHTML = '<strong>Disadvantages: </strong>Long walks';
        carouselImages2[0].src = 'images/portfolio/nugget1.jpg';
        carouselImages2[1].src = 'images/portfolio/nugget2.jpg';

    });

    others.addEventListener('click', function () {
        modalTitle2.textContent = 'Other Places of Attraction';
        modalText2.textContent = 'Text about Lakes.';
        modalAdvantage2.innerHTML = '<strong>Advantages: </strong>A lot of places to go and take pictures';
        modalDisdvantage2.innerHTML = '<strong>Disadvantages: </strong>Need to drive a few hours to get by places';
        carouselImages2[0].src = 'images/portfolio/glacier1.jpg';
        carouselImages2[1].src = 'images/portfolio/glacier2.jpg';
        carouselImages2[2].src = 'images/portfolio/glacier3.jpg';

    });

    //Taiwan
    const taipei = document.getElementById('taipei');
    const others2 = document.getElementById('others2');
    const modalTitle3 = document.getElementById('modal-title3');
    const modalText3 = document.getElementById('modal-text-body3');
    const modalAdvantage3 = document.getElementById('advantages3');
    const modalDisdvantage3 = document.getElementById('disadvantages3')

    // Set the initial content to display for modal 3
    modalTitle3.textContent = 'Taipei';
    modalText3.textContent = 'Taipei is a vibrant and bustling city located in Taiwan. It is a fascinating destination with a rich history, vibrant culture, and delicious food. Taipei offers a wide range of attractions, from stunning temples and museums to bustling night markets and modern shopping districts.';
    modalAdvantage3.innerHTML = '<strong>Advantages: </strong>Diversity of food choices and well-developed transportation system.';
    modalDisdvantage3.innerHTML = '<strong>Disadvantages: </strong>Quite busy and chaotic during peak tourist season.';
    const carouselImages3 = document.querySelectorAll('#carouselExampleIndicators3 img');
    carouselImages3[0].src = 'images/portfolio/taipei1.jpg';
    carouselImages3[1].src = 'images/portfolio/taipei2.jpg';
    carouselImages3[2].src = 'images/portfolio/taipei3.jpg';

    // Add event listeners to the buttons
    taipei.addEventListener('click', function () {
        modalTitle3.textContent = 'Taipei';
        modalText3.textContent = 'Taipei is a vibrant and bustling city located in Taiwan. It is a fascinating destination with a rich history, vibrant culture, and delicious food. Taipei offers a wide range of attractions, from stunning temples and museums to bustling night markets and modern shopping districts.';
        modalAdvantage3.innerHTML = '<strong>Advantages: </strong>Diversity of food choices and well-developed transportation system.';
        modalDisdvantage3.innerHTML = '<strong>Disadvantages: </strong>Quite busy and chaotic during peak tourist season.';
        carouselImages3[0].src = 'images/portfolio/taipei1.jpg';
        carouselImages3[1].src = 'images/portfolio/taipei2.jpg';
        carouselImages3[2].src = 'images/portfolio/taipei3.jpg';

    });

    others2.addEventListener('click', function () {
        modalTitle3.textContent = 'Other places of attractions';
        modalText3.textContent = 'Taipei 101 skyscraper offers stunning views of the city from its observation deck. Another must-visit destination is the Taroko Gorge, a breathtakingly beautiful natural wonder with stunning hiking trails and waterfalls. Taiwan is a wonderful destination with plenty to offer for travelers of all ages and interests. With its unique culture, beautiful scenery, and delicious cuisine, it is a must-visit destination for anyone looking for an unforgettable travel experience.';
        modalAdvantage3.innerHTML = '<strong>Advantages: </strong>Affordable destination which is a great option for budget-conscious travelers.';
        modalDisdvantage3.innerHTML = '<strong>Disadvantages: </strong>Particularly crowded during peak tourist season. It can also be difficult to navigate and find your way around due to language barrier';
        carouselImages3[0].src = 'images/portfolio/others1.jpg';
        carouselImages3[1].src = 'images/portfolio/others2.jpg';
        carouselImages3[2].src = 'images/portfolio/others3.jpg';

    });

    //South Korea
    const seoul = document.getElementById('seoul');
    const jeju = document.getElementById('jeju');
    const modalTitle4 = document.getElementById('modal-title4');
    const modalText4 = document.getElementById('modal-text-body4');
    const modalAdvantage4 = document.getElementById('advantages4');
    const modalDisdvantage4 = document.getElementById('disadvantages4')

    // Set the initial content to display for modal 4
    modalTitle4.textContent = 'Seoul';
    modalText4.textContent = 'Seoul, the capital city of South Korea, is a fascinating and dynamic destination with a rich cultural heritage and modern amenities. It offers a wide range of attractions, from ancient palaces and temples to modern shopping districts and delicious food. One of the advantages of visiting Seoul is the convenience and efficiency of the transportation system, which makes it easy to get around and explore. Additionally, the food scene in Seoul is incredible, with a wide range of delicious Korean cuisine to try.';
    modalAdvantage4.innerHTML = '<strong>Advantages: </strong>Convenience and efficiency of the transportation system to get around and the wide range of Korean cuisine ';
    modalDisdvantage4.innerHTML = '<strong>Disadvantages: </strong>Crowded in places like Myeong-dong and Gangnam';
    const carouselImages4 = document.querySelectorAll('#carouselExampleIndicators4 img');
    carouselImages4[0].src = 'images/portfolio/seoul1.jpg';
    carouselImages4[1].src = 'images/portfolio/seoul2.jpg';
    carouselImages4[2].src = 'images/portfolio/seoul3.jpg';

    // Add event listeners to the buttons
    seoul.addEventListener('click', function () {
        modalTitle4.textContent = 'Seoul';
        modalText4.textContent = 'Seoul, the capital city of South Korea, is a fascinating and dynamic destination with a rich cultural heritage and modern amenities. It offers a wide range of attractions, from ancient palaces and temples to modern shopping districts and delicious food. One of the advantages of visiting Seoul is the convenience and efficiency of the transportation system, which makes it easy to get around and explore. Additionally, the food scene in Seoul is incredible, with a wide range of delicious Korean cuisine to try.';
        modalAdvantage4.innerHTML = '<strong>Advantages: </strong>Convenience and efficiency of the transportation system to get around and the wide range of Korean cuisine ';
        modalDisdvantage4.innerHTML = '<strong>Disadvantages: </strong>Crowded in places like Myeong-dong and Gangnam';
        carouselImages4[0].src = 'images/portfolio/seoul1.jpg';
        carouselImages4[1].src = 'images/portfolio/seoul2.jpg';
        carouselImages4[2].src = 'images/portfolio/seoul3.jpg';

    });

    jeju.addEventListener('click', function () {
        modalTitle4.textContent = 'Jeju';
        modalText4.textContent = 'Jeju Island, located off the southern coast of South Korea, is a stunning and unique destination with a rich cultural heritage and natural beauty. It offers a wide range of attractions, from volcanic landscapes and beaches to traditional villages and museums. Overall, Jeju Island is a must-visit destination for anyone interested in experiencing the unique beauty and culture of South Korea. While there may be potential drawbacks, such as limited transportation and crowds, the incredible attractions and natural beauty make it well worth the trip.';
        modalAdvantage4.innerHTML = '<strong>Advantages: </strong>More relaxed and laid-back vibe than the bustling cities on the mainland.';
        modalDisdvantage4.innerHTML = '<strong>Disadvantages: </strong>Limited transportation options as the island is primarily serviced by buses and taxis.';
        carouselImages4[0].src = 'images/portfolio/jeju1.jpg';
        carouselImages4[1].src = 'images/portfolio/jeju2.jpg';
        carouselImages4[2].src = 'images/portfolio/jeju3.jpg';

    });

    //USA
    const sanfran = document.getElementById('sanfran');
    const losa = document.getElementById('losa');
    const lasv = document.getElementById('lasv');
    const yosemite = document.getElementById('yosemite');
    const modalTitle5 = document.getElementById('modal-title5');
    const modalText5 = document.getElementById('modal-text-body5');
    const modalAdvantage5 = document.getElementById('advantages5');
    const modalDisdvantage5 = document.getElementById('disadvantages5')
    const carouselImages5 = document.querySelectorAll('#carouselExampleIndicators5 img');

    // Set the initial content to display for modal 5
    modalTitle5.textContent = 'San Francisco';
    modalText5.textContent = 'San Francisco is a beautiful and iconic city located in the heart of California. It offers a wide range of attractions, from the Golden Gate Bridge and Alcatraz Island to the bustling Fishermans Wharf and famous cable cars. Overall, San Francisco is a must-visit destination for anyone looking to experience the unique culture and beauty of California. While there may be potential drawbacks, such as high costs and crowds, the incredible attractions and vibrant atmosphere make it well worth the trip.';
    modalAdvantage5.innerHTML = '<strong>Advantages: </strong>Diverse range of international cuisine and fresh seafood options. Known for its vibrant and artistic culture, with plenty of museums, galleries, and music venues to explore.';
    modalDisdvantage5.innerHTML = '<strong>Disadvantages: </strong>High cost of living and crowded during peak tourist season.';
    carouselImages[0].src = 'images/portfolio/sanfran1.jpg';
    carouselImages[1].src = 'images/portfolio/sanfran2.jpg';
    carouselImages[2].src = 'images/portfolio/sanfran3.jpg';

    // Add event listeners to the buttons
    sanfran.addEventListener('click', function () {
        modalTitle5.textContent = 'San Francisco';
        modalText5.textContent = 'San Francisco is a beautiful and iconic city located in the heart of California. It offers a wide range of attractions, from the Golden Gate Bridge and Alcatraz Island to the bustling Fishermans Wharf and famous cable cars. Overall, San Francisco is a must-visit destination for anyone looking to experience the unique culture and beauty of California. While there may be potential drawbacks, such as high costs and crowds, the incredible attractions and vibrant atmosphere make it well worth the trip.';
        modalAdvantage5.innerHTML = '<strong>Advantages: </strong>Diverse range of international cuisine and fresh seafood options. Known for its vibrant and artistic culture, with plenty of museums, galleries, and music venues to explore.';
        modalDisdvantage5.innerHTML = '<strong>Disadvantages: </strong>High cost of living and crowded during peak tourist season.';
        carouselImages5[0].src = 'images/portfolio/sanfran1.jpg';
        carouselImages5[1].src = 'images/portfolio/sanfran2.jpg';
        carouselImages5[2].src = 'images/portfolio/sanfran3.jpg';

    });

    losa.addEventListener('click', function () {
        modalTitle5.textContent = 'Los Angeles';
        modalText5.textContent = 'Los Angeles, located in southern California, is a vibrant and sprawling city known for its iconic landmarks, beautiful beaches, and diverse culture. It offers a wide range of attractions, from the famous Hollywood Walk of Fame and Universal Studios to the trendy neighborhoods of Santa Monica and Venice Beach. Overall, Los Angeles is a must-visit destination for anyone looking to experience the unique culture and beauty of southern California. While there may be potential drawbacks, such as traffic and expense, the incredible attractions and laid-back atmosphere make it well worth the trip.';
        modalAdvantage5.innerHTML = '<strong>Advantages: </strong>Incredible weather with sunny skies and warm temperatures year-round. ';
        modalDisdvantage5.innerHTML = '<strong>Disadvantages: </strong>High cost of living and heavy traffic and long commutes, which can make it difficult to get around the city';
        carouselImages5[0].src = 'images/portfolio/losa1.jpg';
        carouselImages5[1].src = 'images/portfolio/losa2.jpg';
        carouselImages5[2].src = 'images/portfolio/losa3.jpg';
        carouselImages5[3].src = 'images/portfolio/losa4.jpg';
        carouselImages5[4].src = 'images/portfolio/losa5.jpg';

    });

    lasv.addEventListener('click', function () {
        modalTitle5.textContent = 'Las Vegas';
        modalText5.textContent = 'Las Vegas, located in the state of Nevada, is known as the entertainment capital of the world, offering a wide range of attractions, from world-class casinos and luxury resorts to incredible live shows and nightlife. Overall, Las Vegas is a must-visit destination for anyone looking to experience the excitement and entertainment of the United States. While there may be potential drawbacks, such as extreme heat and sensory overload, the incredible attractions and unique atmosphere make it well worth the trip.';
        modalAdvantage5.innerHTML = '<strong>Advantages: </strong>Incredible entertainment options for everyone and high-end luxury experiences to budget-friendly activities.';
        modalDisdvantage5.innerHTML = '<strong>Disadvantages: </strong>Intense heat during the summer months and constant barrage of sights, sound and activities in the night';
        carouselImages5[0].src = 'images/portfolio/lasv1.jpg';
        carouselImages5[1].src = 'images/portfolio/lasv2.jpg';
        carouselImages5[2].src = 'images/portfolio/lasv3.jpg';

    });

    yosemite.addEventListener('click', function () {
        modalTitle5.textContent = 'Yosemite National Park';
        modalText5.textContent = 'Las Vegas, located in the state of Nevada, is known as the entertainment capital of the world, offering a wide range of attractions, from world-class casinos and luxury resorts to incredible live shows and nightlife. Overall, Las Vegas is a must-visit destination for anyone looking to experience the excitement and entertainment of the United States. While there may be potential drawbacks, such as extreme heat and sensory overload, the incredible attractions and unique atmosphere make it well worth the trip.';
        modalAdvantage5.innerHTML = '<strong>Advantages: </strong>Incredible entertainment options for everyone and high-end luxury experiences to budget-friendly activities.';
        modalDisdvantage5.innerHTML = '<strong>Disadvantages: </strong>Intense heat during the summer months and constant barrage of sights, sound and activities in the night';
        carouselImages5[0].src = 'images/portfolio/yosemite1.jpg';
        carouselImages5[1].src = 'images/portfolio/yosemite2.jpg';
        carouselImages5[2].src = 'images/portfolio/yosemite3.jpg';

    });

    //Japan
    const tokyo = document.getElementById('tokyo');
    const hokkaido = document.getElementById('hokkaido');
    const modalTitle6 = document.getElementById('modal-title6');
    const modalText6 = document.getElementById('modal-text-body6');
    const modalAdvantage6 = document.getElementById('advantages6');
    const modalDisdvantage6 = document.getElementById('disadvantages6')

    // Set the initial content to display for modal 6
    modalTitle6.textContent = 'Tokyo';
    modalText6.textContent = 'Tokyo, the capital city of Japan, is a bustling metropolis that seamlessly blends traditional culture with modern technology. It offers a wide range of attractions, from the iconic Tokyo Tower and bustling Shibuya Crossing to the serene gardens and temples throughout the city. Overall, Tokyo is a must-visit destination for anyone looking to experience the unique culture and beauty of Japan. While there may be potential drawbacks, such as language barriers and crowds, the incredible attractions and efficient atmosphere make it well worth the trip.';
    modalAdvantage6.innerHTML = '<strong>Advantages: </strong>Diverse food range and known for the cleanliness, efficiency and safety.';
    modalDisdvantage6.innerHTML = '<strong>Disadvantages: </strong>Language barrier as English is not widely spoken and can be crowded during peak tourist season.';
    const carouselImages6 = document.querySelectorAll('#carouselExampleIndicators6 img');
    carouselImages[0].src = 'images/portfolio/tokyo1.jpg';
    carouselImages[1].src = 'images/portfolio/tokyo2.jpg';
    carouselImages[2].src = 'images/portfolio/tokyo3.jpg';

    // Add event listeners to the buttons
    tokyo.addEventListener('click', function () {
        modalTitle6.textContent = 'Tokyo';
        modalText6.textContent = 'Tokyo, the capital city of Japan, is a bustling metropolis that seamlessly blends traditional culture with modern technology. It offers a wide range of attractions, from the iconic Tokyo Tower and bustling Shibuya Crossing to the serene gardens and temples throughout the city. Overall, Tokyo is a must-visit destination for anyone looking to experience the unique culture and beauty of Japan. While there may be potential drawbacks, such as language barriers and crowds, the incredible attractions and efficient atmosphere make it well worth the trip.';
        modalAdvantage6.innerHTML = '<strong>Advantages: </strong>Diverse food range and known for the cleanliness, efficiency and safety.';
        modalDisdvantage6.innerHTML = '<strong>Disadvantages: </strong>Language barrier as English is not widely spoken and can be crowded during peak tourist season.';
        carouselImages6[0].src = 'images/portfolio/tokyo1.jpg';
        carouselImages6[1].src = 'images/portfolio/tokyo2.jpg';
        carouselImages6[2].src = 'images/portfolio/tokyo3.jpg';

    });

    hokkaido.addEventListener('click', function () {
        modalTitle6.textContent = 'Hokkaido';
        modalText6.textContent = 'Hokkaido, the northernmost island of Japan, is known for its natural beauty, hot springs, onsen, and winter sports. It offers a wide range of attractions, from the stunning scenery of the Shiretoko National Park and the unique wildlife of the Asahiyama Zoo to the incredible skiing and snowboarding opportunities at Niseko and other resorts.';
        modalAdvantage6.innerHTML = '<strong>Advantages: </strong>Breathtaking landscapes and wildlife throughout the island. Renowned for its fresh seafood and dairy products.';
        modalDisdvantage6.innerHTML = '<strong>Disadvantages: </strong>Extreme weather during the winter months, which can make travel and outdoor activities difficult.';
        carouselImages6[0].src = 'images/portfolio/hokkaido1.jpg';
        carouselImages6[1].src = 'images/portfolio/hokkaido2.jpg';
        carouselImages6[2].src = 'images/portfolio/hokkaido3.jpg';

    });

});

// Filter Buttons

const filterButtons = document.querySelectorAll('.filter-button');
let activeButton = document.querySelector('.filter-button.active');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeButton.classList.remove('active');
    button.classList.add('active');
    activeButton = button;
    const category = button.getAttribute('data-category');
    filterPortfolio(category);

  });
});

function filterPortfolio(category) {
  portfolioItems.forEach((item) => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


