import {
	Consumes,
	Flask,
	Food,
	Profession
} from '../core/proto/common.js';
import { SavedTalents } from '../core/proto/ui.js';

import {
	Mage_Options_ArmorType as ArmorType,
	Mage_Options as MageOptions
} from '../core/proto/mage.js';

import * as PresetUtils from '../core/preset_utils.js';

import DefaultBlankGear from './gear_sets/blank.gear.json';

import DefaultAPL from './apls/default.apl.json';

export const GearArcaneDefault = PresetUtils.makePresetGear('Default', DefaultBlankGear, { talentTree: 0 });
export const GearFireDefault = PresetUtils.makePresetGear('Default', DefaultBlankGear, { talentTree: 1 });
export const GearFrostDefault = PresetUtils.makePresetGear('Default', DefaultBlankGear, { talentTree: 2 });

export const ROTATION_PRESET_ARCANE = PresetUtils.makePresetAPLRotation('Default', DefaultAPL, { talentTree: 0 });
export const ROTATION_PRESET_FIRE = PresetUtils.makePresetAPLRotation('Default', DefaultAPL, { talentTree: 1 });
export const ROTATION_PRESET_FROST = PresetUtils.makePresetAPLRotation('Default', DefaultAPL, { talentTree: 2 });

// Default talents. Uses the wowhead calculator format, make the talents on
// https://wowhead.com/classic/talent-calc and copy the numbers in the url.
export const DefaultTalents = {
	name: 'Fire',
	data: SavedTalents.create({
		talentsString: '230025030002-5052000123033151-003',
	}),
};

export const DefaultOptions = MageOptions.create({
	armor: ArmorType.MageArmor,
});

export const DefaultConsumes = Consumes.create({
	flask: Flask.FlaskUnknown,
	food: Food.FoodUnknown,
});

export const OtherDefaults = {
	distanceFromTarget: 20,
	profession1: Profession.Engineering,
	profession2: Profession.Tailoring,
};
