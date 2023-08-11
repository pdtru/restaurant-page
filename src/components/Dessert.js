import MenuTitle from './MenuTitle';
import MenuItem from './MenuItem';

class Dessert {
  menuTitle = new MenuTitle('DESSERT');
  bûcheNoël = new MenuItem(
    'BÛCHE DE NOËL',
    'Layers of sponge cake and velvety fillings, intricately rolled and adorned with festive decorations'
  );
  lemonCake = new MenuItem(
    'LEMON CURD ITALIANO SEMIFREDDO',
    'A frozen delicacy that marries the zesty allure of lemon curd with the creamy charm of Italian semifreddo'
  );
  soufflé = new MenuItem(
    'SOUFFLÉ LÉGER DE GRÂCE',
    "Delicate flavors ascend in a cloud-like confection that's both airy and rich"
  );

  render() {
    const container = document.createElement('div');
    container.className = 'course';
    container.append(
      this.menuTitle.render(),
      this.bûcheNoël.render(),
      this.lemonCake.render(),
      this.soufflé.render()
    );
    return container;
  }
}

export default Dessert;
