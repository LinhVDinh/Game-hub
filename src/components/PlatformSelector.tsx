import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { useState } from "react";

interface Props {
    onSelectedPlatform: (platform: Platform) => void
}

const PlatformSelector = ({onSelectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  const [platformName, setPlatformName] = useState('');
  
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName ? platformName : 'Platform'}
        
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => {onSelectedPlatform(platform)
        setPlatformName(platform.name);
        }} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
