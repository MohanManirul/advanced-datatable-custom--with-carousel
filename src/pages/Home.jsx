
import Accordion from "../components/Accordion";
import Slider from "../components/Slider";
import Features from './../components/Features';
import DataTable from "./users/DataTable";



const Home = () => {
    return (
        <div>
            <Slider />
            <Features />
            <Accordion />
            <DataTable />
           
        </div>
    );
};

export default Home;