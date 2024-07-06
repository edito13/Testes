interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  flags: {
    png: string;
    svg: string;
  };
  // Outros campos que você deseja incluir
}

interface ListProps {
  initialItems: string[];
}
