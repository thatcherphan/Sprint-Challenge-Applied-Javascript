// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((topic) => {
        const topics = topic.data;
        console.log(topics);
        tabCreator(topics)

    })
    .catch((err) =>{
        console.log('error:', err )
    })

const title = document.querySelector('.topics');
    
function tabCreator(arg){
    const tab0 = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const tab4 = document.createElement('div');
    const tab5 = document.createElement('div');

    tab0.classList.add('tab');
    tab1.classList.add('tab');
    tab2.classList.add('tab');
    tab3.classList.add('tab');
    tab4.classList.add('tab');
    tab5.classList.add('tab');

    title.appendChild(tab0);
    title.appendChild(tab1);
    title.appendChild(tab2);
    title.appendChild(tab3);
    title.appendChild(tab4);
    title.appendChild(tab5);

    tab0.textContent = "ALL";
    tab1.textContent = arg.topics[0];
    tab2.textContent = arg.topics[1];
    tab3.textContent = arg.topics[2];
    tab4.textContent = arg.topics[3];
    tab5.textContent = arg.topics[4];

}