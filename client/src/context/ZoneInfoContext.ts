import {createContext} from 'react';
import {TZoneInfo} from 'models';

const ZoneInfoContext = createContext<TZoneInfo>({
	countryCode: '',
	city: '',
	countryName: '',
	setZoneInfo: () => {},
});

export default ZoneInfoContext;
