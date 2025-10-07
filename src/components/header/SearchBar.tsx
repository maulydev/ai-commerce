import Container from "../shared/Container";
import Link from "next/link";
import HStack from "../shared/HStack";
import Center from "../shared/Center";
import { FileStack, Heart } from "lucide-react";
import Cart from "../cart/Cart";
import AiSearch from "../ai-search/AiSearch";
import { SearchForm } from "./SearchForm";

const SearchBar = () => {
  return (
    <Container className="border-y">
      <HStack className="justify-between py-4">
        <Link href="/">
          <h1 className="font-black text-5xl text-amber-500">LunaCart</h1>
        </Link>

        <SearchForm />

        <HStack className="gap-x-8 text-sm">
          <AiSearch />

          <Link href="">
            <Center className="hover:text-amber-500 hover:[&>div]:bg-amber-500">
              <FileStack />
              <p>Compare</p>
            </Center>
          </Link>
          <Link href="">
            <Center className="hover:text-amber-500 hover:[&>div]:bg-amber-500">
              <Heart />
              <p>Wish Lists</p>
            </Center>
          </Link>

          <Cart />
        </HStack>
      </HStack>
    </Container>
  );
};

export default SearchBar;
