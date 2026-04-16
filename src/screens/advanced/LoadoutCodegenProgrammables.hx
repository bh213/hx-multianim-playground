package screens.advanced;

@:build(bh.multianim.ProgrammableCodeGen.buildAll())
@:keep
class LoadoutCodegenProgrammables extends bh.multianim.ProgrammableBuilder {
	@:manim("public/assets/demos/advanced/loadout-lab.manim", "loadoutLab")
	public var loadoutLab;
}
