import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Pdf from "react-to-pdf";


const Blog = () => {
    const ref = React.createRef();

    return (
        <div>

            <NavBar></NavBar>


            <div ref={ref} style={{ width: "100%" }}>

                <div className="bg-slate-300 p-20 lg:p-40  text w-full mx-auto rounded-b-md">

                    <div><h1 className="text-lg lg:text-5xl font-bold text-center mt-10 mb-16 text-slate-700">Answers of the Questions</h1></div>
                    <div><h1 className="text-lg lg:text-5xl font-bold text-center mt-10 mb-16 text-slate-700"><Pdf targetRef={ref} filename="blogPage.pdf" x={0} y={0}>
                        {({ toPdf }) => (
                            <button
                                className=" text-white rounded-lg bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 font-medium text-xl px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={toPdf}
                            >
                                Generate Pdf
                            </button>
                        )}
                    </Pdf></h1></div>
                    <div>
                        <p className="text-3xl font-bold max-w-5xl my-5 mx-auto text-stone-700 ">1. What's the differences between uncontrolled and controlled components?</p>
                        <p className="text-xl font-semibold max-w-5xl mx-auto  text-stone-900">:- Controlled components: A controlled component is a component where React is in charge of the component's state. This means that the component receives its current value and updates from its parent component via props. The parent component also handles any changes to the component's state via callbacks.</p>
                        <p className="text-xl font-semibold max-w-5xl mx-auto  text-stone-900"> Uncontrolled components: An uncontrolled component is a component where React is not in charge of the component's state. This means that the component stores and manages its own state internally. The parent component does not pass down any initial values or callbacks to the component, and instead relies on the component's default behavior.</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold max-w-5xl my-5 mx-auto  text-stone-700">2. How to validate React props using PropTypes?</p>
                        <p className="text-xl font-semibold max-w-5xl mx-auto  text-stone-900">:- PropTypes is a typechecking library built into React, which allows us to validate the types of props passed to a component. To use PropTypes, we need to import it from the 'prop-types' package, and then define the expected types for each prop in our component using the relevant PropTypes function such as PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, etc.
                            To define PropTypes for a component, we need to add a propTypes property to the component class or function, and set it to an object containing the expected types for each prop. When a prop of the wrong type is passed to a component, a warning message will be displayed in the console, helping we catch bugs early and ensure our code is more robust.</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold max-w-5xl my-5 mx-auto  text-stone-700">3. What's the difference between nodejs and express js?
                            ?</p>
                        <p className="text-xl font-semibold max-w-5xl mx-auto  text-stone-900">:-Node.js is a server-side JavaScript runtime environment that executes JavaScript code outside of a web browser. It provides the capability to create networked applications with event-driven, non-blocking I/O model. Node.js allows developers to use JavaScript on the server-side to build fast, scalable, and highly concurrent applications.

                            Express.js, on the other hand, is a web application framework built on top of Node.js that simplifies the process of building web applications. It provides a set of powerful features for web and mobile applications, such as routing, middleware support, and template engines. Express.js makes it easier to write clean, modular, and scalable code for building web applications.</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold max-w-5xl my-5 mx-auto  text-stone-700">2. What is custom hook?</p>
                        <p className="text-xl font-semibold max-w-5xl mx-auto  text-stone-900">:- A custom hook is a reusable function in React that encapsulates logic related to a specific behavior or functionality. Custom hooks allow developers to extract common logic from components and reuse it across multiple components, making code more modular, reusable, and easier to maintain.</p>
                    </div>

                </div>
            </div>
            <Pdf targetRef={ref} filename="blogPage.pdf" x={0} y={0}>
                {({ toPdf }) => (
                    <button
                        className="w-full text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 font-medium text-xl px-5 py-5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        onClick={toPdf}
                    >
                        Generate Pdf
                    </button>
                )}
            </Pdf>
            <Footer />
        </div>
    );
};

export default Blog;











