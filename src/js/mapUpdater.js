

export class MapUpdater {
  validateInputValue(value) {
    switch (value.length >= 2) {
      case (true):
        break;
      default:
        alert('Нет такого города');
    }
  }

  changeCity(searchInputVal, myMap) {
    return ymaps.geocode(`${searchInputVal}`, { results: 1 })
      .then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        const coords = firstGeoObject.geometry.getCoordinates();
        firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
        firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
        myMap.geoObjects.add(firstGeoObject);
        myMap.panTo([...coords], { flying: 1 });

        const loc = coords.join(',');
        const address = firstGeoObject.getAddressLine();
        const [country, city] = address.split(',');

        return {
          city,
          country,
          loc,
        };
      });
  }
}
