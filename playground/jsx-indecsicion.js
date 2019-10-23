const app = {
    title:'Indescion App',
    subTitle:'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderDocument();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderDocument();
}

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const option = app.options[random];
    alert(option);
}

const appRoot = document.getElementById('app');
const renderDocument = () => {
    const template =(
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>Subtitle: {app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Removeall</button>

        <ol>
        {
            app.options.map(option => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
);
ReactDOM.render(template, appRoot);
}


renderDocument();