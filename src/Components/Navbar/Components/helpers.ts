export type Coordinates = {
  width: number;
  height: number;
  top: number;
  left: number;
};

type ListItemsIteratorProps = {
  list: Element[];
  window: Window;
  backgroundRef: React.RefObject<HTMLDivElement>;
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
  nav: HTMLDivElement | null;
};

export function listItemsIterator(props: ListItemsIteratorProps) {
  const { list, window, backgroundRef, setCoordinates, nav } = props;

  const background = backgroundRef.current;
  const { innerWidth } = window;

  list.forEach((listItem) => {
    if (listItem.className === 'not' || innerWidth < 900) return;

    listItem.addEventListener('mouseenter', (e) => {
      const target = e.target as HTMLElement;
      const navCoords = nav?.getBoundingClientRect();
      const dropdownCoords = (
        target.querySelector('.dropdown') as HTMLElement
      )?.getBoundingClientRect();

      setCoordinates({
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top,
        left: dropdownCoords.left - (navCoords ? navCoords.left : 0)
      });

      target.classList.add('trigger-enter');
      setTimeout(() => {
        target.classList.contains('trigger-enter') &&
          target.classList.add('trigger-enter-active');
      }, 150);
      background?.classList.add('open');
    });

    listItem.addEventListener('mouseleave', ({ target }) => {
      (target as HTMLElement)?.classList.remove(
        'trigger-enter',
        'trigger-enter-active'
      );
      background?.classList.remove('open');
    });
  });
}
