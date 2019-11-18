<?php

/**
 * Plugin Name: Gutenberg Random Blocks
 * Description: Generating Random Markup
 * Version: 1.0.0
 * Author: Automattic
 */

add_action( 'init', function() {

	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' );

	wp_register_script(
		'a8c-random',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'a8c-random-style',
		plugins_url( 'style.css', __FILE__ )
	);

	wp_register_style(
		'a8c-random-style-editor',
		plugins_url( 'style-editor.css', __FILE__ )
	);

	register_block_type( 'a8c/random-maze', [
		'editor_script' => 'a8c-random',
		'style'         => 'a8c-random-style',
		'editor_style'  => 'a8c-random-style-editor',
	] );

	register_block_type( 'a8c/random-svg', [
		'editor_script' => 'a8c-random',
		'style'         => 'a8c-random-style',
		'editor_style'  => 'a8c-random-style-editor',
	] );

} );
