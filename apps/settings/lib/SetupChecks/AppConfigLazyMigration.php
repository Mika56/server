<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2024 Maxence Lange <maxence@artificial-owl.com>
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
namespace OCA\Settings\SetupChecks;

use OCP\IAppConfig;
use OCP\IL10N;
use OCP\SetupCheck\ISetupCheck;
use OCP\SetupCheck\SetupResult;

class AppConfigLazyMigration implements ISetupCheck {
	private static array $lazyAppConfig = [
		'core' => [
			'oc.integritycheck.checker',
		],
	];
	public function __construct(
		private IL10N $l10n,
		private IAppConfig $appConfig,
	) {
	}
	public function getName(): string {
		return $this->l10n->t('Migration of Lazy App Config');
	}
	public function getCategory(): string {
		return 'config';
	}
	public function run(): SetupResult {
		$c = 0;
		foreach (self::$lazyAppConfig as $appId => $configKeys) {
			foreach($configKeys as $configKey) {
				$c += (int) $this->appConfig->updateLazy($appId, $configKey, true);
			}
		}

		if ($c === 0) {
			return SetupResult::success($this->l10n->t('Up to date'));
		} else {
			return SetupResult::info($this->l10n->t('%1$s config values updated', [$c]));
		}
	}
}
