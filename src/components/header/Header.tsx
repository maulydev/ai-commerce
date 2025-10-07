import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import Card from "../shared/Card";

const Header = () => {
  return (
    <header>
      <Card className="space-y-4 pt-4">
        <TopBar />
        <SearchBar />
      </Card>
    </header>
  );
};

export default Header;
