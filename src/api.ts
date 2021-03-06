import { publish as _publish } from './publish';
import { packageCommand, listFiles as _listFiles } from './package';

export interface ICreateVSIXOptions {
	/**
	 * The location of the extension in the file system.
	 *
	 * Defaults to `process.cwd()`.
	 */
	cwd?: string;

	/**
	 * The destination of the packaged the VSIX.
	 *
	 * Defaults to `NAME-VERSION.vsix`.
	 */
	packagePath?: string;

	/**
	 * The base URL for links detected in Markdown files.
	 */
	baseContentUrl?: string;

	/**
	 * The base URL for images detected in Markdown files.
	 */
	baseImagesUrl?: string;
}

export interface IPublishOptions {

	/**
	 * The location of the extension in the file system.
	 *
	 * Defaults to `process.cwd()`.
	 */
	cwd?: string;

	/**
	 * The Personal Access Token to use.
	 *
	 * Defaults to the stored one.
	 */
	pat?: string;

	/**
	 * The base URL for links detected in Markdown files.
	 */
	baseContentUrl?: string;

	/**
	 * The base URL for images detected in Markdown files.
	 */
	baseImagesUrl?: string;
}

export interface IListFilesOptions {

	/**
	 * The working directory of the extension. Defaults to `process.cwd()`.
	 */
	cwd?: string;
}

export interface IPublishVSIXOptions {

	/**
	 * The Personal Access Token to use.
	 *
	 * Defaults to the stored one.
	 */
	pat?: string;

	/**
	 * The base URL for links detected in Markdown files.
	 */
	baseContentUrl?: string;

	/**
	 * The base URL for images detected in Markdown files.
	 */
	baseImagesUrl?: string;
}

/**
 * Creates a VSIX from the extension in the current working directory.
 */
export function createVSIX(options: ICreateVSIXOptions = {}): Promise<any> {
	return packageCommand(options);
}

/**
 * Publishes the extension in the current working directory.
 */
export function publish(options: IPublishOptions = {}): Promise<any> {
	return _publish(options);
}

/**
 * Lists the files included in the extension's package.
 */
export function listFiles(options: IListFilesOptions = {}): Promise<string[]> {
	return _listFiles(options.cwd);
}

/**
 * Publishes a pre-build VSIX.
 */
export function publishVSIX(packagePath: string, options: IPublishVSIXOptions = {}): Promise<any> {
	return _publish({ packagePath, ...options });
}